import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodoTask, updateTodoTask } from "../features/todo/TodoSlice";

function ShowTodo() {
  const displayTodo = useSelector((state) => state.initialTodoValue);
  console.log(displayTodo);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-section text-center pb-5 text-black ">
        <h3 className="text-2xl font-medium text-black">List of Todo's Task</h3>
        <div className="py-8">
          {displayTodo.map((todo) => (
            <li
              key={todo.id}
              className="text-lg text-white mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            >
              {todo.text}
              {/* {console.log(`todo id = ${todo.id} , todo text = ${todo.text}`)} */}

              <div>
                <button
                  className="text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-800 rounded text-md "
                  onClick={() => dispatch(updateTodoTask(todo.id, todo.text))}
                >
                  <span>
                    <i class="fa-regular fa-pen-to-square"></i>
                  </span>
                </button>

                <button
                  className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md ml-3"
                  onClick={() => dispatch(removeTodoTask(todo.id))}
                >
                  <span>
                    <i class="fa-solid fa-trash-can"></i>
                  </span>
                </button>
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowTodo;
