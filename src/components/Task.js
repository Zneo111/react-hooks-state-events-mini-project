import React from "react";

function Task({ text, category, onDelete }) {
  // This function handles the click event for deleting the task
  function handleClick() {
    onDelete(text); // Pass the task text to App.js for deletion
  }

  return (
    <div className="task">
      <div className="label">{category}</div> {/* Display the category */}
      <div className="text">{text}</div> {/* Display the task text */}
      <button className="delete" onClick={handleClick}>X</button> {/* Delete button */}
    </div>
  );
}

export default Task;
