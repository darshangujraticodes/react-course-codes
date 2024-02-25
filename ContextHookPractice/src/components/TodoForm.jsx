import React, { useId, useState } from "react";
import { useTodo } from "../ContextTodo/TodoContext";

function TodoForm() {
  const [todoTask, setTodoTask] = useState("");

  const { todos, addTodo } = useTodo();

  const addTodoTask = (e) => {
    e.preventDefault();
    console.log("Added Task List = ", todoTask);

    if (!todoTask) return;

    addTodo({ todo: todoTask, isCompleted: false });
    console.log("context todos = ", todos);
    setTodoTask("");
  };

  return (
    <form onSubmit={addTodoTask} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={todoTask}
        onChange={(e) => setTodoTask(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
