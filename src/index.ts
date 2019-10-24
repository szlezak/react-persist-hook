import { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";

const usePersist = (key: string, storageType: "localStorage"|"sessionStorage", debounceLimit: number) => {
  const DEBOUNCE_LIMIT = debounceLimit || 250;
  const mounted = useRef();
  const [data, setData] = useState({});

  const { setItem, getItem } = window[storageType] || window.localStorage || {};

  const persist = debounce(dataToStore => {
    setItem(key, JSON.stringify(dataToStore));
  }, DEBOUNCE_LIMIT);

  useEffect(() => {
    if (!mounted.current) {
      const storedData = getItem(key);

      storedData && setData(JSON.parse(storedData))
      mounted.current = true;
    } else {
      persist(data);
    }
  }, [data]);

  return [data, setData];
};

export default usePersist;
