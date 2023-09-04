import React, { useEffect, useState } from "react";

const ToDo = () => {
  const getItems = () => {
    let listData = JSON.parse(localStorage.getItem("lists"));
    console.log("listData", listData);
    return listData;
  };
  // useEffect(()=> {
  //   let listData = JSON.parse(localStorage.getItem("lists"));
  //   setTasklist(listData);
  // },[]);

  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState(getItems());
  // const [tasklist, setTasklist] = useState([]);

  const [edittask, setEditTask] = useState(null);
  const [isedit, setIsEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(tasklist));
    console.log("in useEffect 1");
  }, [tasklist]);

  const handlerAdd = () => {
    if (!task.length) {
      alert("please fill data");
    } else if (task && isedit) {
      // setTasklist();
      setTasklist((prevState) => {
        prevState.map((data) => {
          if (data.id === edittask) {
            return { ...data, name: task };
          }
          return data;
        });
      });
      setTask("");
      setIsEdit(false);
    } else {
      const allTodos = { id: new Date().getTime().toString(), name: task };
      setTasklist([...tasklist, allTodos]);
      setTask("");
    }
  };

  const handlerEdit = (id) => {
    let edittask = tasklist.find((item) => {
      return item.id === id;
    });
    setIsEdit(true);
    setTask(edittask.name);
    setEditTask(id);
    console.log(edittask);
  };

  //   console.log("edited item",edittask)

  const handlerDelete = (id) => {
    const newlists = tasklist.filter((item) => {
      return id !== item.id;
    });
    setTasklist(newlists);
  };

  const handleDeleteall = () => {
    setTasklist([]);
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
        {isedit ? (
          <button
            className="rounded-full bg-zinc-200 w-16 h-10 text-blue-400"
            onClick={() => handlerAdd()}
          >
            save
          </button>
        ) : (
          <button
            className="rounded-full bg-zinc-200 text-blue-400 w-16 h-10"
            onClick={() => handlerAdd()}
          >
            add
          </button>
        )}
      </div>
      <p className="text-3xl font-bold underline text-white mt-5">
        Your TaskList :{" "}
      </p>

      {tasklist.map((t) => {
        return (
          <>
            <div key={t.id} className="bg-white flex flex-col mt-6">
              <div className="flex gap-3  justify-center items-center">
                <div className="text-lg font-bold">{t.name}</div>
                <div>
                  <button
                    className="rounded-full bg-zinc-200 w-32 h-10 text-blue-400"
                    onClick={() => handlerEdit(t.id)}
                  >
                    edit
                  </button>
                </div>
                <div>
                  <button
                    className="rounded-full bg-zinc-200 w-32 h-10 text-blue-400"
                    onClick={() => handlerDelete(t.id)}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
      {tasklist.length >= 1 && (
        <button
          className="rounded-full bg-zinc-200 w-32 h-10 text-blue-400 mt-5"
          onClick={() => handleDeleteall()}
        >
          Remove all
        </button>
      )}
    </div>
  );
};

export default ToDo;
