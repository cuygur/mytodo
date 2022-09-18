import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./styles.css";

const AddToDo = (props) => {
  const initialToDo = { id: null, content: "", isCompleted: false };
  const [toDo, setToDo] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setToDo({ ...toDo, [name]: value, id: nanoid(), isCompleted: false });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!toDo["content"]) return;

        props.addToDo(toDo);
        setToDo(initialToDo);
      }}
    >
      <div className="todo-item">
        <input
          value={toDo["content"]}
          name="content"
          onChange={handleInputChange}
          placeholder="Enter a task"
          required
          minlength="3"
          className="todo-content"
        />

        <button className="add-todo-btn">Add</button>
      </div>
    </form>
  );
};

export default AddToDo;
