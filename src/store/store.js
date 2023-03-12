import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "features/todo/todoSlices";

export const store = configureStore({
    reducer: {
        todos: todoReducers
    }
});