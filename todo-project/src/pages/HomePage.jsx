import React, { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

function HomePage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(BASE_URL);
        console.log("API response data ", response, typeof response);

        const json = await response.json();
        console.log("API json Conversion ", json, typeof json);
        setData(json);
      } catch (error) {
        setError("Unable to Fetch Data !!");
        console.log("Error", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
    console.log(data);
    if (error) return <div>{error}</div>;
    if (isLoading) return <div>Loading ...</div>;
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="uppercase text-2xl font-semibold text-center">
        Fetch API data
      </h1>
      <div className="apidata-wrapper">
        {data?.map((user) => (
          <>
            <li key={user.id}>
              {`Name : ${user.name}`} {` || Email : ${user.email}`}
              {` || City : ${user.address.city}`}
            </li>
          </>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
