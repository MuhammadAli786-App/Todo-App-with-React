import React, { useState } from "react";
import styles from "./app.module.css";
import Input from "./component/Input";
import ButtonCmp from "./component/buttonCmp";
import Listing from "./component/Listing";

const App = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoValue.trim().length < 3) {
      alert("Invalid Input Value");
      return;
    }

    const newTodo = todoValue.trim();
    setTodos((currentTodos) => [newTodo, ...currentTodos]);
    setTodoValue("");
  };

  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>Productivity</p>
          <h1>Todo App</h1>
          <p className={styles.subtitle}>Stay organized. Get things done.</p>
        </header>

        <div className={styles.actions}>
          <div className={styles.inputRow}>
            <Input
              aria-label="Enter a new task"
              placeholder="Enter a new task..."
              onChange={(e) => setTodoValue(e.target.value)}
              value={todoValue}
            />
            <ButtonCmp text="Add Task" onClick={addTodo} variant="primary" />
          </div>

          <div className={styles.secondaryRow}>
            <ButtonCmp
              text="Delete All"
              onClick={deleteAll}
              variant="dangerSecondary"
            />
          </div>
        </div>

        <Listing todos={todos} setTodos={setTodos} />
      </section>
    </main>
  );
};

export default App;
