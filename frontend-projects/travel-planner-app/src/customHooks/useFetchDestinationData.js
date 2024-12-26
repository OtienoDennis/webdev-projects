import { useEffect, useState } from 'react';

async function getAccessToken() {
  const clientId = 'bG62EOPuCJLgFV9wmj30VJtH4h3YGsAP';
  const clientSecret = 'MJylzE6yxyOPK7w5';

  const response = await fetch(
    'https://test.api.amadeus.com/v1/security/oauth2/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      }),
    }
  );
  const data = await response.json();
  return data.access_token;
}

export function useFetchDestinationData(URL, keyword, dispatch) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        if (!URL || !keyword || keyword.trim().length < 3) return

        setLoading(true);
        setError(null);

        try {
          const token = await getAccessToken();

          const response = await fetch(`${URL}${keyword}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch Destination data');
          }
          const result = await response.json();
          setData(result);
          dispatch({ type: 'destinationData', payload: result });
          dispatch({ type: 'setLoadingState', payload: false });
        } catch (error) {
          console.error('Error recieved', error.message);
          setError(error.me);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [URL, keyword, dispatch]
  );
  return { data, error, loading };
}
