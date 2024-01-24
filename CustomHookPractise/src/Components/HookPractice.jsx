import React, { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";

const urls = {
  users: "https://jsonplaceholder.typicode.com/users",
  posts: "https://jsonplaceholder.typicode.com/posts-ewew",
  comments: "https://jsonplaceholder.typicode.com/comments",
};

function HookPractice() {
  const [urlData, setUrlData] = useState(urls.users);

  //   console.log("current selected url data : ", urlData);

  const { apiData, isError, isLoading } = useFetch(urlData);

  console.log(`isError = ${isError}, isLoading= ${isLoading}`);

  return (
    <>
      <h1 className="text-3xl font-semibold">Custom Hook Practice</h1>
      <div className="flex mt-5 text-center font-semibold text-start">
        <div className="radio-wrap mx-5 ">
          <input
            type="radio"
            id="userdata"
            name="urldata"
            value="users"
            className="mr-1"
            defaultChecked
            onChange={(e) => setUrlData(urls[e.target.value])}
          />
          <label htmlFor="userdata">Users</label>
        </div>

        <div className="radio-wrap mx-5">
          <input
            type="radio"
            id="postdata"
            name="urldata"
            value="posts"
            className="mr-1"
            onChange={(e) => setUrlData(urls[e.target.value])}
          />
          <label htmlFor="postdata">Posts</label>
        </div>

        <div className="radio-wrap mx-5">
          <input
            type="radio"
            id="commentdata"
            name="urldata"
            value="comments"
            className="mr-1"
            onClick={(e) => setUrlData(urls[e.target.value])}
          />
          <label htmlFor="commetdata">Comments</label>
        </div>
      </div>
      <div className="displayData bg-white text-black rounded-lg p-6 font-semibold mt-6 text-lg ">
        {/* <pre className="text-left">{JSON.stringify(apiData, null, 2)}</pre> */}
        {/* {isLoading ? <h2 className="text-2xl">Loading...</h2> : isError} */}

        {isError ? (
          <h2 className="text-2xl">Error...</h2>
        ) : (
          <pre className="text-left">{JSON.stringify(apiData, null, 2)}</pre>
        )}
      </div>
    </>
  );
}

export default HookPractice;
