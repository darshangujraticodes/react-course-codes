import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/TodoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

/*

// store is call single source of truth it should be only one in complete webapp 
in exeption can be 2 but not more than that

Store: It is just like global data storage platform to store data for state management between components.

Reducer are the function through which the data is been updated in store file and can only be updated through them only. it perform CRUD Operation on store 

reducer name convention is done through slice it help the coder which type of state management is used inside web app
reducer function need to export exlpicity and also need to export slice created eg in todoSlice


useSelector 



*/
