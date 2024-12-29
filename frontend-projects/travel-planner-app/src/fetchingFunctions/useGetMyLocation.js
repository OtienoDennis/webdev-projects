import { useEffect, useState } from 'react';

export default function useGetMyLocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        error: 'Geolocation is not supported by this browser.',
      }));
      return;
    }
    const geoLocationSuccess = (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };

    const geoLocationError = (error) => {
      setLocation({
        latitude: null,
        longitude: null,
        error: error.message,
      });
    };

    const geoLocationOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      geoLocationSuccess,
      geoLocationError,
      geoLocationOptions
    );
  }, []);

  return location;
}
