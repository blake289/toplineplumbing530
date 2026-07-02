import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, service, message, zip } = body;

    // Honeypot — bots that POST directly and fill the hidden field get a fake
    // success. No GHL contact, no notification email.
    if (body.company) {
      return NextResponse.json({ success: true });
    }

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.error('Missing GHL environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const serviceTag = service ? [`service:${service}`] : [];
    const servicesRequestedValue = [
      service ? `Service: ${service}` : null,
      zip ? `ZIP: ${zip}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean).join('\n\n');

    const contactPayload: Record<string, unknown> = {
      firstName,
      lastName,
      phone,
      locationId,
      tags: ['website-lead', ...serviceTag],
      source: 'Website Form',
    };
    if (email) contactPayload.email = email;
    if (zip) contactPayload.postalCode = zip;
    if (servicesRequestedValue) {
      contactPayload.customFields = [
        { key: 'services_requested', field_value: servicesRequestedValue },
      ];
    }

    const upsertResponse = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify(contactPayload),
    });

    const ghlOk = upsertResponse.ok;
    if (!ghlOk) {
      const errorText = await upsertResponse.text();
      console.error('GHL upsert failed:', upsertResponse.status, errorText);
    }

    // Email notification fallback — fires regardless of GHL result so a lead is
    // never silently lost. Non-fatal: a failed email does not fail the request.
    let emailSent = false;
    const resendKey = process.env.RESEND_API_KEY;
    const notifyTo = process.env.LEAD_NOTIFY_EMAIL || 'blake@omnipresent.app';
    if (resendKey) {
      const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'Unknown';
      const rows = [
        ['Name', fullName],
        ['Phone', phone],
        ['Email', email],
        ['Service', service],
        ['ZIP', zip],
        ['Message', message],
        ['CRM', ghlOk ? 'Saved to GHL' : 'GHL save FAILED — follow up manually'],
      ].filter(([, v]) => v).map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#64748b">${k}</td><td style="padding:4px 0;font-weight:600">${v}</td></tr>`).join('');
      try {
        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'Topline Plumbing Leads <onboarding@resend.dev>',
            to: [notifyTo],
            subject: `New website lead: ${fullName}${service ? ' — ' + service : ''}`,
            html: `<h2 style="margin:0 0 12px">New Topline website lead</h2><table style="font-family:system-ui,sans-serif;font-size:14px">${rows}</table>`,
          }),
        });
        emailSent = emailRes.ok;
        if (!emailRes.ok) console.error('Lead email failed:', emailRes.status, await emailRes.text());
      } catch (e) {
        console.error('Lead email error:', e);
      }
    }

    // Success if the lead was captured anywhere (GHL or email). Only hard-fail
    // when BOTH sinks fail, so the visitor is not told to retry a saved lead.
    if (!ghlOk && !emailSent) {
      return NextResponse.json({ error: 'Failed to submit lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
