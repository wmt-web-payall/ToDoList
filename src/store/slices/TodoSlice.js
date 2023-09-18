import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  editToDo: null,
  isEdit: false,
};

const TodoSlice = createSlice({
  name: "todoitem",
  initialState,
  reducers: {

    //add task in the list 
    addTask(state, action) {
      const todo = {
        id: Math.ceil(Math.random() * 100), 
        text: action.payload,
      };
      state.todos.push(todo);
    },

    // filter value and update state with not matching id
    removeTask(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    //find the edit task value from state
    editTask(state, action) {
      const editTodo = action.payload;
      state.editToDo = state.todos.find((todo) => todo.id === editTodo);
    },

    //find value in state  with same edittodo id  and update the text
    updateTask(state, action) {
      state.editToDo.text = action.payload;
      const updatedtask = state.todos.find(
        (todo) => todo.id === state.editToDo.id
      );
      updatedtask.text = state.editToDo.text;
    },

    //change the toggle state based on click of  edit button
    editToggle(state, action) {
      state.isEdit = action.payload;
    },

    //delete all todo by assigning empty state
    deleteAllTask(state) {
      state.todos = [];
    },
  },
});

export default TodoSlice.reducer;
export const {
  addTask,
  removeTask,
  editTask,
  deleteAllTask,
  editToggle,
  updateTask,
} = TodoSlice.actions;
