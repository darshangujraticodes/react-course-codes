import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchName = searchParams.get("name");
  const searchOccupation = searchParams.get("occupation");

  return (
    <>
      <div className="search-wrapper py-8">
        <div className="container mx-auto">
          <h2 className="text-center text-5xl font-medium">Search Params</h2>
          <p className="text-center text-3xl font-medium py-8">
            Name : {searchName} || Occupation : {searchOccupation}
            {/* Type in URL = /search?name=darshan&occupation=web-developer */}
          </p>

          <input
            type="text"
            className="border-2 rounded-lg text-2xl p-3 mr-5 "
            placeholder="Enter your Query"
            onChange={(e) =>
              setSearchParams({
                name: e.target.value,
                occupation: "Full Stack Developer",
              })
            }
          />

          <button
            className="  bg-indigo-700 text-white rounded-lg text-2xl px-3 py-2  "
            onClick={() =>
              setSearchParams({
                name: "Darshan",
                occupation: "Full Stack Developer",
              })
            }
          >
            Insert Search Data
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
