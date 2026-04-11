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

    // Build contact payload for GHL v2 API
    const serviceTag = service ? [`service:${service}`] : [];
    const customFields = [
      ...(service ? [{ id: 'service', value: service }] : []),
      ...(message ? [{ id: 'message', value: message }] : []),
    ];

    const contactPayload = {
      firstName,
      lastName,
      phone,
      email,
      locationId,
      tags: ['website-lead', ...serviceTag],
      source: 'Website Form',
      ...(customFields.length > 0 && { customFields }),
    };

    const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify(contactPayload),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('GHL API error:', error);
      return NextResponse.json({ error: 'Failed to submit to CRM' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
