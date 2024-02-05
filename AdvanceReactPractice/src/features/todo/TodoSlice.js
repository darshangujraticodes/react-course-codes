import React from "react";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  initialTodoValue: [{ id: 1, text: "task 1" }],
};

// this reducer function has 2 default parameter   eg fucntion_name(state, action)
// state define the current value in store and action define the unique id to update store data  note

const addTask = (state, action) => {
  const todo = {
    id: nanoid(),
    text: action.payload,
  };
  state.initialTodoValue.push(todo);
};

// createSlice({ slice_name, initial_state, reduce_function }) has 3 parameter
export const todoSlice = createSlice({
  name: "TodoSliceName",
  initialState,
  reducers: {
    // it is similar to function declaration inside objects
    // either create externall and call inside or vice versa
    // this reduces has  2 parameter
    addTodoTask: addTask,
    removeTodoTask: (state, action) => {
      let removeTaskId = action.payload;
      console.log("removetaskid value =", removeTaskId);
      // console.log("called from showTodo !!");
      state.initialTodoValue = state.initialTodoValue.filter(
        (todo) => todo.id != removeTaskId
      );
    },
    updateTodoTask: (state, action) => {
      let updateTaskId = action.payload.id;
      let updateTaskData = action.payload.text;

      state.initialTodoValue = state.initialTodoValue.splice(
        updateTaskId,
        1,
        updateTaskData
      );
    },
  },
});

export const { addTodoTask, removeTodoTask, updateTodoTask } =
  todoSlice.actions;

export default todoSlice.reducer;
