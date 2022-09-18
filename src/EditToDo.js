import React, { useState, useEffect } from "react";

const EditToDo = (props) => {
  const [toDo, setToDo] = useState(props.selectedToDo);
  useEffect(() => {
    setToDo(props.selectedToDo);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setToDo({
      ...toDo,
      [name]: value
    });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateToDo(toDo.id, toDo);
      }}
      className="edit-form"
    >
      <input
        type="text"
        name="content"
        value={toDo.content}
        onChange={handleInputChange}
        className="todo-edit"
        required
      />
      <button className="update-todo-btn">Update</button>
      <button
        onClick={() => props.setEditing(false)}
        className="cancel-update-todo-btn"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditToDo;
