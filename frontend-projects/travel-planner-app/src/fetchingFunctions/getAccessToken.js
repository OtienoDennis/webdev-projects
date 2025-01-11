const amadeusKey = import.meta.env.VITE_AMADEUS_KEY;
const amadeusSecret = import.meta.env.VITE_AMADEUS_SECRET;

export default async function getAccessToken() {
  if (!amadeusKey || !amadeusSecret) {
    console.error('Amadeus API credentials are not defined.');
    return null;
  }

  try {
    const response = await fetch(
      'https://test.api.amadeus.com/v1/security/oauth2/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: amadeusKey,
          client_secret: amadeusSecret,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Request failed with status code: ' + response.status);
    }
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Fetch Error:', error?.message || error);
    return null;
  }
}
