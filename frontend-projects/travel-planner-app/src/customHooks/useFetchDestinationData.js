import { useEffect, useState } from 'react';
import getAccessToken from './getAccessToken';

export function useFetchDestinationData(URL, keyword, dispatch) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        if (!URL || !keyword || keyword.trim().length < 3) return;

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
          console.log(result);
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
