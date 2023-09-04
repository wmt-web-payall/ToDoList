import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteAllTask,
  editTask,
  editToggle,
  removeTask,
  updateTask,
} from "./store/slices/TodoSlice";

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

  useEffect(() => {
    if (isEdit) {
      setTask(editTodo.text);
    }
  }, [isEdit, editTodo]);


  console.log("isedit====", isEdit);

  console.log("====", editTodo);

  console.log("data of todolist", data);

  const addToDo = (payload) => {
    dispatch(addTask(task));
    dispatch(editToggle(false));
    setTask("");
  };

  const editToDo = (index) => {
    console.log("sdjkvjsklv", index);
    dispatch(editTask(index));
    dispatch(editToggle(true));
    console.log("edittodoid", editTodo);
    console.log("iseditinhandleedit----", isEdit);
  };

  const deleteToDo = (index) => {
    dispatch(removeTask(index));
  };

  const updateToDo = () => {
    dispatch(updateTask(task));
    dispatch(editToggle(false))
    setTask("")
  };

  const deleteAllToDo = () => {
    dispatch(deleteAllTask());
  };

  return (
    <div className="bg-[#16171B] w-screen h-screen p-14">
      <div className="flex place-content-center gap-10">
        <input
          type="text"
          value={task}
          placeholder="add your task"
          onChange={(e) => setTask(e.target.value)}
        ></input>
        {isEdit ? (
          <button
            className="rounded-full bg-zinc-200 text-blue-400 w-16 h-10"
            onClick={() => updateToDo()}
          >
            update
          </button>
        ) : (
          <button
            className="rounded-full bg-zinc-200 text-blue-400 w-16 h-10"
            onClick={() => addToDo()}
          >
            add
          </button>
        )}
      </div>
      <p className="text-3xl font-bold underline text-white mt-5">
        Your TaskList :{" "}
      </p>

      {data.map((task) => {
        return (
          <div key={task.id} className="bg-white flex flex-col mt-6">
            <div className="flex gap-3  justify-center items-center">
              <div className="text-lg font-bold">{task.text}</div>
              <div>
                {console.log("----->>>>>>>>", task.id)}
                <button
                  className="rounded-full bg-zinc-200 w-32 h-10 text-blue-400"
                  onClick={() => editToDo(task.id)}
                >
                  edit
                </button>
              </div>
              <div>
                <button
                  className="rounded-full bg-zinc-200 w-32 h-10 text-blue-400"
                  onClick={() => deleteToDo(task.id)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {data.length >= 1 && (
        <button
          className="rounded-full bg-zinc-200 w-32 h-10 text-blue-400 mt-5"
          onClick={() => deleteAllToDo()}
        >
          Remove all
        </button>
      )}
    </div>
  );
};

export default ToDoList;
