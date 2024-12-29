import { useState, useEffect } from 'react';
import getAccessToken from './getAccessToken';
import useGetMyLocation from './useGetMyLocation';

export default function useFetchMyCityCode() {
  const [myCityCode, setMyCityCode] = useState(null);
  const { location } = useGetMyLocation();

  useEffect(function () {
    if (!location || !location.latitude || !location.longitude) return;
    async function fetchMyLocation() {
      try {
        const token = await getAccessToken();
        const response = await fetch(
          `https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=${location.latitude}&longitude=${location.longitude}&radius=100`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch Destination data');
        }
        const result = await response.json();
        if (result?.data?.length > 0) {
          setMyCityCode(result.data[0].address.cityCode);
        } else {
          console.warn('No city code found for the given coordinates');
        }
        console.log(result)
      } catch (error) {
        console.error('Error recieved', error.message);
      }
    }
    fetchMyLocation();
  },[location]);
  return myCityCode;
}
