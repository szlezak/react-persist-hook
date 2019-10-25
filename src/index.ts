import { useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

const usePersist = (
  key: string,
  storageType?: 'localStorage' | 'sessionStorage',
  debounceLimit?: number,
): [any, Function] => {
  const DEBOUNCE_LIMIT = debounceLimit || 250;
  const STORAGE_TYPE = storageType || 'localStorage';

  const mounted = useRef<boolean>();
  const [data, setData] = useState({});

  const persist = debounce(dataToStore => {
    window[STORAGE_TYPE].setItem(key, JSON.stringify(dataToStore));
  }, DEBOUNCE_LIMIT);

  useEffect(() => {
    if (!mounted.current) {
      const storedData = window[STORAGE_TYPE].getItem(key);

      mounted.current = true;
      storedData && setData(JSON.parse(storedData));
    } else {
      persist(data);
    }
  }, [data]);

  return [data, setData];
};

export default usePersist;
