import React from "react";

const Button = ({ className, name, onAddTask, taskId, taskName }) => {
  return (
    <button className={className} onClick={() => onAddTask(taskId, taskName)}>
      {name}
    </button>
  );
};

export default Button;
