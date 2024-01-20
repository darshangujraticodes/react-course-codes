import React, { useEffect, useState } from "react";
import UserData from "./UserData";

function FetchApiData() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Make Sure you are connected to Internet
    // here it is best example of  chaining function

    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/users", signal)
      .then((res) => res.json())
      .then(setApiData)
      .catch((e) => console.error(`Error Message =`, e))
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="fetchapi-data-section section-padding px-3 ">
      <div className="container-section">
        <h3>Fetch User Data from API </h3>
        {isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <ul>
            {apiData != null &&
              apiData.map((user) => {
                return <UserData key={user.id} name={user.name} />;
              })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FetchApiData;
