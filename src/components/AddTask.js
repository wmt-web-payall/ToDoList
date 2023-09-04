import React, { useState } from "react";
import Button from "./Button";

const AddTask = ({ isEdit, taskname, onAddToDo, onUpdateToDo }) => {
  const [todo, setToDo] = useState("");

  return (
    <div>
      {" "}
      <input
        type="text"
        value={todo || taskname}
        placeholder="add your task"
        onChange={(e) => setToDo(e.target.value)}
      ></input>
      {isEdit ? (
        <Button
          className="rounded-full bg-zinc-200 text-blue-400 w-16 h-10"
          name="update"
          onAddTask={() => {
            onUpdateToDo(todo);
            setToDo("");
          }}
        />
      ) : (
        <Button
          className="rounded-full bg-zinc-200 text-blue-400 w-16 h-10"
          name="add"
          onAddTask={() => {
            onAddToDo(todo);
            setToDo("");
          }}
        />
      )}
    </div>
  );
};

export default AddTask;
