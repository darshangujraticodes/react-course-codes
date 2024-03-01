import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../app/todoSlice";

function DisplayTodo() {
  const [isEditable, setIsEditable] = useState(false);

  const todoList = useSelector((state) => state.todoInitialState);

  const dispatch = useDispatch();

  const updateTodoText = () => {
    console.log("click");
  };

  return (
    <>
      <div>
        <h1 className="font-semibold text-2xl my-5 text-white">Todo List</h1>
        {todoList.map((todoItem) => (
          <>
            <li
              key={todoItem.id}
              className="list-none my-2 py-2 rounded-md focus-visible:border-none bg-slate-300"
            >
              <input
                className="bg-slate-300 w-[200px] mr-5 text-black w-50 text-2xl font-semibold"
                type="text"
                key={todoItem.id}
                value={todoItem.text}
                readOnly={isEditable}
                onChange={updateTodoText}
              />

              <button
                className="my-3"
                onClick={() => dispatch(removeTodo(todoItem.id))}
              >
                <span className="bg-red-600 text-white p-3 rounded-md text-md">
                  <i className="fa-solid fa-trash-can"></i>
                </span>
              </button>
            </li>
          </>
        ))}
      </div>
    </>
  );
}

export default DisplayTodo;
