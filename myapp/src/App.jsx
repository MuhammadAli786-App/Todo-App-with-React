import React, { useState } from "react";
import styles from "./app.module.css";
import Input from "./component/Input";
import ButtonCmp from "./component/buttonCmp";
import Listing from "./component/Listing";

const App = () => {
  let [todoValue, setTodoValue] = useState("");
  let [todos, setTodos] = useState([]);
  const addTodo = () => {
    console.log(todoValue);
    if (todoValue.length < 3) {
      alert("Invalid Input Value");
      return;
    }
    todos.unshift(todoValue);
    setTodos([...todos]);
    setTodoValue("");
    console.log(todos);
  };

  const deleteAll = () => {
    setTodos([]);
  };


  return (
    <div className={styles.container}>
      <h1>Todo App</h1>
      <Input
        placeholder="Enter Todos..."
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
      />
      <ButtonCmp text="Add" onClick={addTodo} />
      <ButtonCmp text="Delete All"   style={{
    background: "linear-gradient(135deg, #dc3545, #c82333)", 
  }} onClick={deleteAll} />
      <Listing todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
