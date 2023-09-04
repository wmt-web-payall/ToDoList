import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {

  todos: [],
  edittodo: null,
  isEdit: false,
};

const TodoSlice = createSlice({
  name: "todoitem",
  initialState,
  reducers: {
    // addTask(state, action) {
    //   console.log("hii");
    //   console.log(action);
    //   const todo= {id: new Date().getTime().toString(), name: action.payload}
    //   state.push(todo);
    // },
    addTask(state, action) {
      const todo = {
        id: Math.ceil(Math.random() * 100),
        text: action.payload,
      };
      state.todos.push(todo);
      console.log("addtodo", state.todos);
    },
    removeTask(state, action) {
      //   let removetask = state.todos.filter((todo) => todo.id !== action.payload);
      console.log("-------------", action.payload);
      console.log("-------------", state.todos);

      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTask(state, action) {
      const editTodo = action.payload;
      console.log("editTodo", editTodo);

      state.edittodo = state.todos.find((todo) => todo.id === editTodo);
      console.log("-------------", current(state.edittodo));
    },

    updateTask(state, action) {
      console.log("updatetask", action.payload);
      state.edittodo.text = action.payload;
      const updatedtask = state.todos.find(
        (todo) => todo.id === state.edittodo.id
      );
      updatedtask.text = state.edittodo.text;
    },

    editToggle(state, action) {
      console.log(action.payload);
      state.isEdit = action.payload;
    },

   
    deleteAllTask(state, action) {
      state.todos = [];
    },
  },
});

console.log(TodoSlice.actions);
console.log("edittask reducer", TodoSlice.actions.editTask);
export default TodoSlice.reducer;
export const {
  addTask,
  removeTask,
  editTask,
  deleteAllTask,
  editToggle,
  updateTask,
} = TodoSlice.actions;
