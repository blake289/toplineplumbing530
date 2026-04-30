export type GoogleReview = {
  authorName: string;
  authorUrl?: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTime: string;
  publishTime: string;
  text: string;
};

type PlacesV1Response = {
  reviews?: Array<{
    rating: number;
    text?: { text: string };
    originalText?: { text: string };
    relativePublishTimeDescription: string;
    publishTime: string;
    authorAttribution: {
      displayName: string;
      uri?: string;
      photoUri?: string;
    };
  }>;
};

export async function getGoogleReviews(): Promise<GoogleReview[]> {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!placeId || !apiKey) {
    return [];
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=en`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'reviews',
        },
        next: { revalidate: 604800 },
      }
    );

    if (!res.ok) {
      return [];
    }

    const data = (await res.json()) as PlacesV1Response;

    if (!data.reviews) {
      return [];
    }

    return data.reviews.map((r) => ({
      authorName: r.authorAttribution.displayName,
      authorUrl: r.authorAttribution.uri,
      profilePhotoUrl: r.authorAttribution.photoUri,
      rating: r.rating,
      relativeTime: r.relativePublishTimeDescription,
      publishTime: r.publishTime,
      text: r.text?.text ?? r.originalText?.text ?? '',
    }));
  } catch {
    return [];
  }
}
