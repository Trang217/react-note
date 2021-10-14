import "./App.css";
import React, { useState } from "react";
import ToDoContext from "./context/ToDoContext";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>React To Do List</h1>
      <ToDoContext.Provider value={{ todos, setTodos }}></ToDoContext.Provider>
    </div>
  );
}

export default App;
