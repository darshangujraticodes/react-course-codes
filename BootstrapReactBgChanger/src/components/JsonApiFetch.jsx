import React, { useEffect, useState } from "react";
// https://jsonplaceholder.typicode.com/users

// As per Industry Standard API is integrated while mounting component in page therfor it is necessary to put fetch(api) in useEffect with [] empty dependency to insert only during mounting component

function JsonApiFetch() {
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  /*
Fetching API Data has Industry Protocols shared in pointer below !!
1] While dealing with API data it has 3 state management requirement data (array format), loading (boolean), & error (boolean)  so declare in useState() hook   
2] API data is variable and it is mounted "only once" during component integration with main page due to which it is embed in useEffect() Hook
3] While initializing we set loading to true and error to undefine
4] Fetch("api_url") fetch data then will check web signal code if its is 200
5] while signal is 200 is converted in json format return res.json()
6] Else we throw error message
7] After converting data in json it is set to apidata variable setState()
8] After that the error which has thrown in signal is catch and set in error variable using setError() state
9] Finally will help to terminate importing data from API and and set loading to false.



*/

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    console.log("Error !!");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) =>
        // console.log(data) to fetch and print json data
        setApiData(data)
      )
      .catch((e) => {
        console.log(e);
        setError(e);
      })
      .finally(() => setLoading(false));
  }, []);

  //   console.log(apiData);

  let jsxData;
  if (loading) {
    jsxData = <h5>API Data is Loading !</h5>;
  } else if (error != null) {
    jsxData = <h5>Error !</h5>;
  } else {
    jsxData = JSON.stringify(apiData);
  }

  return (
    <div json-api-data-wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>JSON API Data Fetch</h3>
            <h5>{jsxData}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JsonApiFetch;
