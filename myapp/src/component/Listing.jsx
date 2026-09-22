import React, { useState } from "react";
import styles from "./listing.module.css";
import ButtonCmp from "./buttonCmp";
import Input from "./Input";

function Listing({ todos, setTodos }) {
  const [editIndexNumber, setEditIndexNumber] = useState(null);
  const [editValue, setEditValue] = useState("");

  if (todos.length === 0) {
    return (
      <div className={styles.emptyState} role="status" aria-live="polite">
        <p>No tasks yet</p>
        <span>Add your first task above to get started.</span>
      </div>
    );
  }

  const deleteTodo = (indexNumber) => {
    const updatedTodos = todos.filter((_, index) => index !== indexNumber);
    setTodos(updatedTodos);

    if (editIndexNumber === indexNumber) {
      setEditIndexNumber(null);
      setEditValue("");
    }
  };

  const editTodo = (indexNumber) => {
    setEditIndexNumber(indexNumber);
    setEditValue(todos[indexNumber]);
  };

  const saveHandler = (indexNumber) => {
    if (editValue.trim().length < 3) {
      alert("Invalid Todo");
      return;
    }

    const updatedTodos = [...todos];
    updatedTodos[indexNumber] = editValue.trim();
    setTodos(updatedTodos);
    setEditIndexNumber(null);
    setEditValue("");
  };

  const cancel = () => {
    setEditIndexNumber(null);
    setEditValue("");
  };

  return (
    <section className={styles.listSection}>
      <div className={styles.listHeader}>
        <span>{todos.length === 1 ? "1 task" : `${todos.length} tasks`}</span>
      </div>

      <ul className={styles.list}>
        {todos.map((value, index) => {
          return editIndexNumber === index ? (
            <li key={`edit-${index}`} className={styles.editItem}>
              <div className={styles.editRow}>
                <Input
                  aria-label="Edit task"
                  placeholder="Enter Edit Value"
                  onChange={(e) => setEditValue(e.target.value)}
                  value={editValue}
                />
              </div>

              <div className={styles.editActions}>
                <ButtonCmp text="Save" onClick={() => saveHandler(index)} variant="primary" />
                <ButtonCmp text="Cancel" onClick={cancel} variant="dangerSecondary" />
              </div>
            </li>
          ) : (
            <li key={`todo-${index}`} className={styles.todoItem}>
              <span className={styles.todoText}>{value}</span>

              <div className={styles.todoActions}>
                <ButtonCmp text="Edit" onClick={() => editTodo(index)} variant="secondary" />
                <ButtonCmp
                  text="Delete"
                  onClick={() => deleteTodo(index)}
                  variant="danger"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Listing;
