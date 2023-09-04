import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteAllTask,
  editTask,
  editToggle,
  removeTask,
  updateTask,
} from "../store/slices/TodoSlice";
import Button from "../components/Button";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const ToDoList = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const data = useSelector((state) => {
    return state.todoitems.todos;
  });
  let isEdit = useSelector((state) => {
    return state.todoitems.isEdit;
  });
  const editTodo = useSelector((state) => state.todoitems.edittodo);

  //show edit value in input field if there is a value for edit
  useEffect(() => {
    if (isEdit) {
      setTask(editTodo.text);
    }
  }, [isEdit, editTodo]);

  // add a todo item to list
  const addToDo = (todo) => {
    if (!todo) {
      alert("Please add task ");
    }
    dispatch(addTask(todo));
    dispatch(editToggle(false));
    setTask("");
  };

  // selected todo item for edit
  const editToDo = (id) => {
    dispatch(editTask(id));
    dispatch(editToggle(true));
  };

  //delete item from list
  const deleteToDo = (id) => {
    dispatch(removeTask(id));
  };

  //update the edited todo item in list
  const updateToDo = (todo) => {
    dispatch(updateTask(todo));
    dispatch(editToggle(false));
    setTask("");
  };

  //delete all todo items from list
  const deleteAllToDo = () => {
    dispatch(deleteAllTask());
  };

  return (
    <div className="bg-[#16171B] w-screen h-screen p-14">
      <div className="flex place-content-center gap-10">
        {/* Component for adding task  */}
        <AddTask
          isEdit={isEdit}
          onAddToDo={addToDo}
          onUpdateToDo={updateToDo}
          taskname={task}
        />
      </div>
      <p className="text-3xl font-bold underline text-white mt-5">
        Your TaskList :{" "}
      </p>

      {/* Component for the display of All Task */}
      <TaskList
        tasklist={data}
        onEditToDo={editToDo}
        onDeleteToDo={deleteToDo}
      />

      {data.length >= 1 && (
        // Button Component
        <Button
          className="rounded-full bg-zinc-200 w-32 h-10 text-blue-400 mt-5"
          name="Remove all"
          onAddTask={deleteAllToDo}
        />
      )}
    </div>
  );
};

export default ToDoList;
