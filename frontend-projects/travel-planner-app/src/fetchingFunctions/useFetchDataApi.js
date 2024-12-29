import { useCallback, useEffect, useState } from 'react';
import getAccessToken from './getAccessToken';

export default function useFetchDataApi(URL, keyword, dispatch, options = {}) {
  const { dataActionType = 'setData', loadingActionType = 'setLoadingState' } =
    options;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (!URL || !keyword || keyword.trim().length < 3) return;

    setLoading(true);
    setError(null);

    if (dispatch && loadingActionType) {
      dispatch({ type: loadingActionType, payload: true });
    }

    try {
      const token = await getAccessToken();
      const response = await fetch(`${URL}${keyword}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Request failed with status code: ' + response.status);
      }
      const result = await response.json();
      setData(result);
      if (dispatch && dataActionType) {
        dispatch({ type: dataActionType, payload: result });
      }
      console.log(result);
    } catch (error) {
      setError(error?.message || 'An error occured');
      console.error('Fetch Error:', error?.message || error);
    } finally {
      setLoading(false);
      if (dispatch && loadingActionType) {
        dispatch({ type: loadingActionType, payload: false });
      }
    }
  }, [URL, keyword, dispatch, dataActionType, loadingActionType]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, [fetchData]);

  return { data, error, loading };
}
