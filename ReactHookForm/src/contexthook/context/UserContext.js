import React from "react";
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;

/*
 
Context Hook State management 

1] In build react methods to deal with state management.
2] In this we create one common global data storage file called context in context folder.
Note: Context file is created as per state management of data 
eg 
1] To manage User state we create UserContext, 
2] To manage product data state we will create ProductContext usecase in product cart  
3] Now we have to wrap all components in context provider so that they can directly gain acces of context data.
4] Context file data storage is can done through some function and here it is done trough useState Hook to manage state.
5] e. const [data, useDate] = useState() => context data is updated through useData() function and data is fetched through data variable.
6] This useState() will act as function to fetch and update data in context file.
7] After creating ContextProvider we need to call this ContextProvider in App.jsx or main.jsx so all elements or component will be work as children and will get direct acces rights to context file.
8] But data here is fetched using one hook called useContext hook.


Redux Hook state management 

1] Third Party library to deal with state management.
2] In this we create one common global data storage file called store in store Folder
Note : In complete WebApp only 1 store is created all types of data is manage under it only whether user, product or authentication
3] 

*/
