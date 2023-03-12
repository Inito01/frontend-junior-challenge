import { createAsyncThunk } from '@reduxjs/toolkit';
import { todoApiCall } from 'api/todoBaseApi';
import { nanoid } from '@reduxjs/toolkit';


export const fetchTodosFromApi = createAsyncThunk(
    'todos/fecthTodosFromApi',
    async () => {
        const res = await todoApiCall.get('/todos');
        if (res.status === 200) {
            return res.data;
        } else {
            throw new Error(res.statusText);
        }
    }
);

export const addTodoToApi = createAsyncThunk(
    'todos/addTodoToApi',
    async (todo) => {
        const res = await todoApiCall.post('/todos', {
            id: nanoid(),
            label: todo.label,
        });
        if (res.status === 201) {
            return res.data;
        } else {
            throw new Error(res.statusText);
        }
    }
);

export const updateTodoToApi = createAsyncThunk(
    'todos/updateTodoToApi',
    async (todo) => {
        const res = await todoApiCall.put(`/todos/${todo.id}`, todo);
        if (res.status === 200) {
            return res.data;
        } else {
            throw new Error(res.statusText);
        }
    }
);

export const deleteTodoFromApi = createAsyncThunk(
    'todos/deleteTodoFromApi',
    async (todo) => {
        const res = await todoApiCall.delete(`/todos/${todo.id}`);
        if (res.status === 200) {
            return todo;
        } else {
            throw new Error(res.statusText);
        }
    }
);