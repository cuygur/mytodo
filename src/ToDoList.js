import React from "react";

const ToDoList = (props) => {
  return (
    <div className="todos">
      <h2 className="sub-header">Tasks</h2>
      <div className="todos-container">
        {props?.todosList.length > 0 ? (
          props.todosList.map((toDo) => (
            <div className="todo-with-btns">
              <div key={toDo.id} className="todo-detail">
                {/* <input
                  type="checkbox"
                  name="content"
                  value={toDo.isCompleted}
                /> */}
                <div> {toDo.content}</div>
              </div>
              <div className="todo-btns">
                <button
                  onClick={() => {
                    props.editRow(toDo);
                  }}
                  className="edit-todo-btn"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteToDo(toDo.id)}
                  className="delete-todo-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No ToDos</div>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
