import React, { useState, useEffect } from "react";
import "./styles.css";
import AddToDo from "./AddToDo";
import ToDosList from "./ToDoList";
import EditToDo from "./EditToDo";
import axios from "axios";
import { nanoid } from "nanoid";

const baseURL = "https://63273c9d5731f3db9955f7df.mockapi.io";

const ToDoApp = () => {
  let toDosList = [];
  const initialToDo = { id: null, content: "", isCompleted: false };
  const [toDos, setToDos] = useState(toDosList);
  const [selectedToDo, setSelectedToDo] = useState(initialToDo);
  const [todosList, setTodosList] = React.useState([]);
  const [editing, setEditing] = useState(false);

  const getToDos = () => {
    axios.get(baseURL + "/todos").then((response) => {
      setTodosList(response.data);
    });
  };

  useEffect(() => {
    getToDos();
  }, []);

  const addToDo = (toDo) => {
    axios.post(baseURL + "/todos", {
      id: nanoid(),
      content: toDo.content,
      isCompleted: false
    });
    getToDos();
    alert("ToDo created!");
  };

  const deleteToDo = (id) => {
    axios.delete(baseURL + `/todos/${id}`).then(() => {
      setEditing(false);
      setToDos(toDos.filter((toDo) => toDo.id !== id));
      getToDos();
      alert("ToDo deleted!");
    });
  };

  const updateToDo = (id, updatedToDo) => {
    axios.put(baseURL + `/todos/${id}`, updatedToDo).then((response) => {
      setEditing(false);
      setToDos(toDos, response.data);
      getToDos();
      alert("ToDo updated!");
    });
  };

  const editRow = (toDo) => {
    setEditing(true);

    setSelectedToDo({
      id: toDo.id,
      content: toDo.content,
      isCompleted: toDo.isCompleted
    });
  };

  return (
    <React.Fragment>
      <div className="todo-app-container">
        <AddToDo addToDo={addToDo} />
        <EditToDo
          editing={editing}
          setEditing={setEditing}
          selectedToDo={selectedToDo}
          updateToDo={updateToDo}
        />
        <ToDosList
          toDos={toDos}
          todosList={todosList}
          editRow={editRow}
          deleteToDo={deleteToDo}
        />
      </div>
    </React.Fragment>
  );
};
export default ToDoApp;
