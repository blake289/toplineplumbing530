import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, service, message } = body;

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.error('Missing GHL environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const serviceTag = service ? [`service:${service}`] : [];
    const servicesRequestedValue = [
      service ? `Service: ${service}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean).join('\n\n');

    const contactPayload = {
      firstName,
      lastName,
      phone,
      email,
      locationId,
      tags: ['website-lead', ...serviceTag],
      source: 'Website Form',
      ...(servicesRequestedValue && {
        customFields: [
          { key: 'services_requested', field_value: servicesRequestedValue },
        ],
      }),
    };

    const upsertResponse = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify(contactPayload),
    });

    if (!upsertResponse.ok) {
      const errorText = await upsertResponse.text();
      console.error('GHL upsert failed:', upsertResponse.status, errorText);
      return NextResponse.json({ error: 'Failed to submit to CRM' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
