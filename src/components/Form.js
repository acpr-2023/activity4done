import React, { useState } from "react";

export const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input"
        placeholder="List Task"
      />
      <button type="submit" className="input_btn">
        Add
      </button>
    </form>
  );
};
