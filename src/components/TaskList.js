import React from "react";
import Button from "./Button";

const TaskList = ({ tasklist, onEditToDo, onDeleteToDo }) => {
  return (
    <>
      {tasklist.map((task) => {
        return (
          <div key={task.id} className="bg-white flex flex-col mt-6">
            <div className="flex gap-3  justify-center items-center">
              <div className="text-lg font-bold">{task.text}</div>
              <div>
                <Button
                  className="rounded-full bg-zinc-200 text-blue-400 w-16 h-10"
                  name="edit"
                  onAddTask={onEditToDo}
                  taskId={task.id}
                  taskName={task.text}
                />
              </div>

              <div>
                <Button
                  className="rounded-full bg-zinc-200 text-blue-400 w-16 h-10"
                  name="delete"
                  onAddTask={onDeleteToDo}
                  taskId={task.id}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TaskList;
