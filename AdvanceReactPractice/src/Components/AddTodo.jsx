import React, { useState } from "react";
import { useDispatch } from "react-redux";
// Note useDispatch is an hook of react redux not redux so it is imported from 'react-redux'
import { addTodoTask } from "../features/todo/TodoSlice";
import ShowTodo from "./ShowTodo";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodoTask(input));
    console.log(input);
    setInput("");
  };

  return (
    <>
      <div className="container-section text-center py-12">
        <h1 className="text-5xl font-medium text-black">Add Todo List</h1>
        <div className="py-6">
          <form onSubmit={addTodoHandler} className="flex-col">
            <input
              type="text"
              className=" mt-5 w-[500px] p-3 text-lg font-semibold rounded-lg border-2 
              border-black placeholder:p-4  placeholder:text-black 
              placeholder:rounded-lg "
              required
              placeholder="Enter Your Todo Task ..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <button
              type="submit"
              className="mt-5  py-2 w-[100px] text-lg font-semibold  bg-purple-700 text-white rounded-lg hover:bg-[#262626] hover:text-white "
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <ShowTodo />
    </>
  );
}

export default AddTodo;
