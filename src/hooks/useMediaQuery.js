import { useState, useEffect } from 'react';

const useMediaQuery = () => {
  const [deviceType, setDeviceType] = useState('Mobile');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const defaultMediaQuery = window.matchMedia(
      'screen and (max-width: 868px)'
    );
    const targetMediaQuery = window.matchMedia('screen and (min-width: 868px)');

    const mediaQueryList = [defaultMediaQuery, targetMediaQuery];

    const handleDeviceChange = () => {
      if (defaultMediaQuery.matches) {
        setDeviceType((prevDeviceType) =>
          prevDeviceType !== 'Default' ? 'Default' : prevDeviceType
        );
      } else if (targetMediaQuery.matches) {
        setDeviceType((prevDeviceType) =>
          prevDeviceType !== 'Target' ? 'Target' : prevDeviceType
        );
      }
    };

    mediaQueryList.forEach((item) => {
      item.addEventListener('change', handleDeviceChange);
    });

    handleDeviceChange();
    setIsInitialized(true);

    return () => {
      mediaQueryList.forEach((item) => {
        item.removeEventListener('change', handleDeviceChange);
      });
    };
  }, []);

  return [deviceType, isInitialized];
};

export default useMediaQuery;
