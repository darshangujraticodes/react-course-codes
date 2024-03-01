import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoInitialState: [{ id: 1, text: "Hello World" }],
};

const addTodoMethod = (state, action) => {
  const todo = {
    id: nanoid(),
    text: action.payload,
  };
  state.todoInitialState.push(todo);
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: addTodoMethod,
    removeTodo: (state, action) => {
      console.log("removeTOdo() executed !!");
      state.todoInitialState = state.todoInitialState.filter(
        (todoItem) => todoItem.id !== action.payload
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
