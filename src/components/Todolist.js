import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-solid-svg-icons";

export const Todolist = ({ task, deleteTodo, editTodo }) => {
  const [completed, setCompleted] = useState(task.completed);

  const toggleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`Todo${completed ? "completed" : "unfinished"}`}>
      <div className="complete-button" onClick={toggleComplete}>
        <FontAwesomeIcon icon={completed ? faCircle : farCircle} />
      </div>
      <div>
        <p onClick={() => toggleComplete()}>{task.task}</p>
        <div className="button-container">
          <button className="update_btn" onClick={() => editTodo(task.id)}>
            Edit
          </button>
          <button className="del_btn" onClick={() => deleteTodo(task.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
