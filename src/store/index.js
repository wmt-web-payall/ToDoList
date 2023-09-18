import { configureStore } from "@reduxjs/toolkit";
import  TodoSlice  from "./slices/TodoSlice";


const store = configureStore({
    reducer: {
        todoitems: TodoSlice,
    },
})

export default store;