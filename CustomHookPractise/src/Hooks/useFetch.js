import React, { useEffect, useState } from "react";

export function useFetch(selectedUrl) {
  const [apiData, setApiData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    const controller = new AbortController();

    fetch(selectedUrl, { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return alert("URL Status is 404 Server Error");
      })
      .then(setApiData)
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));

    return () => {
      controller.abort();
    };
  }, [selectedUrl]);

  //   console.log(apiData);
  return { apiData, isError, isLoading };
}
