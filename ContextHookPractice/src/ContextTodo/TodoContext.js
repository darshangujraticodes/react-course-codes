import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Messsage",
      isCompleted: false,
    },
  ],

  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  isCompleteTodo: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
