import React, { useState } from "react";
import styles from "./listing.module.css";
import ButtonCmp from "./buttonCmp";
import Input from "./Input";
function Listing({ todos, setTodos }) {
  if (todos.length === 0) {
    return null;
  }
  let [editIndexNumber, setEditIndexNumber] = useState(null);
  let [editValue, setEditValue] = useState();
  const deleteTodo = (indexNumber) => {
    console.log("deleteTodo", indexNumber, setTodos);
    todos.splice(indexNumber, 1);
    setTodos([...todos]);
  };

  const editTodo = (indexNumber) => {
    console.log("editTodo", indexNumber);
    setEditIndexNumber(indexNumber);
    setEditValue(todos[indexNumber]);
  };

  const saveHandler = (indexNumber) => {
    console.log(editValue, indexNumber);
    if (editValue.length < 3) {
      alert("Invalid Todo");
      return;
    }
    todos.splice(indexNumber, 1, editValue);
    setTodos([...todos]);
    setEditIndexNumber(null);
    setEditValue("");
  };

  console.log(todos);
  const cancel = () => {
    setEditIndexNumber(null);
    setEditValue("");
  };
  return (
    <div className={styles.container}>
      <ul>
        {todos.map((value, index) => {
          return editIndexNumber === index ? (
            <div className={styles.Inpcontainer} key={index}>
              <Input
                placeholder="Enter Edit Value"
                onChange={(e) => setEditValue(e.target.value)}
                value={editValue}
              />
              <ButtonCmp text="Save" onClick={() => saveHandler(index)} />
              <ButtonCmp
                text="Cancel"
                style={{
                  background: "linear-gradient(135deg, #dc3545, #c82333)",
                }}
                onClick={cancel}
              />
            </div>
          ) : (
            <li key={index}>
              {value}{" "}
              <div>
                <ButtonCmp text="Edit" onClick={() => editTodo(index)} />
                <ButtonCmp
                  text="Delete"
                  style={{
                    background: "linear-gradient(135deg, #dc3545, #c82333)",
                  }}
                  onClick={() => deleteTodo(index)}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Listing;
