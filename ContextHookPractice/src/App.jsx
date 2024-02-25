import { useEffect, useState } from "react";
import Card from "./components/Card";
import Login from "./components/Login";
import ThemeBtn from "./components/ThemeBtn";
import UserContextProvider from "./context_Type1/UserContextProvider";
import { ThemeContextProvider } from "./context_Type2/ThemeContext";
import { TodoContextProvider } from "./ContextTodo/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  // Quick Hack here we will fetch all object variables and function assign operation and it will automatically induced on context

  // Note: while creating context we have only created variable and methods operation was not assigned oepration are assigned during using themwhile passing as value

  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  };

  const lightMode = () => {
    setThemeMode("light");
  };

  // Now here comes DOM Manipulation

  useEffect(() => {
    const themeDOM = document.querySelector("html").classList;
    themeDOM.remove("light", "dark");
    themeDOM.add(themeMode);
  }, [themeMode]);

  // Todo Task Operation Business Logic

  const [todos, setTodos] = useState([]);

  const addTodo = (todoVal) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...todoVal }, ...prevTodo]);
  };

  const updateTodo = (id, todoVal) => {
    setTodos((prev) =>
      prev.map((todoItem) => (todoItem.id === id ? todoVal : todoItem))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todoItem) => todoItem.id !== id));
  };

  const isCompleteTodo = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todoItem) =>
        todoItem.id === id
          ? { ...prevTodo, isCompleted: !todoItem.isCompleted }
          : todoItem
      )
    );
  };

  useEffect(() => {
    // Local Storage has one rule it store data in key value pair and along with value is alwaays stored in string form
    // it restricted to local browser host and if it is publish on server it won't function

    const todoList = JSON.parse(localStorage.getItem("todos"));

    if (todoList && todoList.length > 0) {
      setTodos(todoList);
    }
  }, []);

  useEffect(() => {
    // Jere as we know local storage only store string value therefore we are converting json value in strings to store it in local storage.
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="Homeframe pt-8">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <UserContextProvider>
              <div className="login-wrap text-center">
                <Login />
              </div>

              <div className="card-wrap mt-5 text-center">
                <h1 className="font-semibold text-3xl">Context Hook Card</h1>
                <ThemeContextProvider
                  value={{ themeMode, darkMode, lightMode }}
                >
                  <div className="theme-wrap p-5 mt-5 ">
                    <ThemeBtn />
                    <br />
                    <Card />
                  </div>
                </ThemeContextProvider>
              </div>
            </UserContextProvider>
          </div>
          <TodoContextProvider
            value={{ todos, addTodo, updateTodo, deleteTodo, isCompleteTodo }}
          >
            <div className="todo-list-wrapper mt-6 text-center">
              <div className="TodoContext">
                <div className="bg-[#172842] min-h-screen py-8 rounded-md mb-8">
                  <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                      Manage Your Todos
                    </h1>
                    <div className="mb-4">
                      {/* Todo form goes here */}
                      <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {/*Loop and Add TodoItem here */}
                      {todos.map((item) => (
                        <div key={item.id} className="w-full">
                          {/* {console.log(item.id, item)} */}
                          <TodoItem todo={item} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TodoContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
