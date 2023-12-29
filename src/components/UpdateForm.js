import React, { useState } from "react";

export const UpdateForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input"
        placeholder="Update task"
      />
      <button type="submit" className="input_btn">
        Update
      </button>
    </form>
  );
};
