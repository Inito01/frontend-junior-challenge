import { createSlice } from "@reduxjs/toolkit";
import { 
    fetchTodosFromApi, 
    addTodoToApi, 
    updateTodoToApi,
    deleteTodoFromApi
 } from "features/asyncThunks";

const initialState = {
    todos: [],
    status: 'idle',
    error: null
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTodosFromApi.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchTodosFromApi.fulfilled]: (state, action) => {
            state.todos = action.payload;
            state.status = 'success';
        },
        [fetchTodosFromApi.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        // Add
        [addTodoToApi.pending]: (state) => {
            state.status = 'loading';
        },
        [addTodoToApi.fulfilled]: (state, action) => {
            state.todos = [...state.todos, action.payload];
            state.status = 'success';
        },
        [addTodoToApi.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        // Update
        [updateTodoToApi.pending]: (state) => {
            state.status = 'loading';
        },
        [updateTodoToApi.fulfilled]: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        checked: !todo.checked,
                    }
                }
                return todo;
            });
            state.status = 'success';
        },
        [updateTodoToApi.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        // Delete
        [deleteTodoFromApi.pending]: (state) => {
            state.status = 'loading';
        },
        [deleteTodoFromApi.fulfilled]: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            state.status = 'success';
        },
        [deleteTodoFromApi.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export const getTodos = state => state.todos.todos;
export const getStatus = state => state.todos.status;
export const getError = state => state.todos.error;

export default todoSlice.reducer;