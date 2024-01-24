import { useArray } from "../Hooks/useArray";

const initial_Array = [10, 144, 12, 4542, 22, 4541];

function CustomArrayHook() {
  const { array, set, push, replace, clear, reset, remove, filter } =
    useArray(initial_Array);

  return (
    <>
      <div className="array-operation-wrapper ">
        <p className="text-2xl text-center my-5">{array.join(", ")}</p>
        <div className="btn-wrap">
          <button
            className="my-3 p-4 bg-purple-700 text-white text-lg font-semibold mx-4 rounded-lg"
            onClick={() => {
              set([4, 5, 6]);
            }}
          >
            Set to [4,5,6]
          </button>
          <button
            className="my-3 p-4 bg-purple-700 text-white text-lg font-semibold mx-4 rounded-lg"
            onClick={() => {
              push(4);
            }}
          >
            Push 4
          </button>
          <button
            className="my-3 p-4 bg-purple-700 text-white text-lg font-semibold mx-4 rounded-lg"
            onClick={() => replace(1, 9)}
          >
            Replace 2nd Element with 9
          </button>
          <button
            className="my-3 p-4 bg-purple-700 text-white text-lg font-semibold mx-4 rounded-lg"
            onClick={() => filter((n) => n < 50)}
          >
            Keep number less than 50
          </button>
          <button
            className="my-3 p-4 bg-purple-700 text-white text-lg font-semibold mx-4 rounded-lg"
            onClick={() => remove(1)}
          >
            Remove the second Element
          </button>
          <button
            className="my-3 p-4 bg-purple-700 text-white text-lg font-semibold mx-4 rounded-lg"
            onClick={clear}
          >
            Clear Array
          </button>
          <button
            className="my-3 p-4 bg-purple-700 text-white text-lg font-semibold mx-4 rounded-lg"
            onClick={reset}
          >
            Reset Array
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomArrayHook;
