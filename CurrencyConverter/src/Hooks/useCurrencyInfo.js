// Custom Hooks Creation Can be in both JS or JSX as per requirement

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  // fetch API Data
  const [data, setData] = useState({});
  const [fetchingData, setFetchingData] = useState(false);

  // apiSignal help to identify signal type 200 or 404 help to identify error
  const controller = new AbortController();
  let apiSignal = controller.signal;

  useEffect(() => {
    setFetchingData(true);
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
      { apiSignal }
    )
      .then((res) => res.json())
      .then((apiInfo) => setData(apiInfo[currency]));

    // console.log(data, apiSignal);
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
