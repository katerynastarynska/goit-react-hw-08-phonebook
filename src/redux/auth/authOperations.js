import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const registerNewUser = createAsyncThunk(
    "auth/register", async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/signup", credentials);
            console.log(data.user.name)
            token.set(data.token);
            toast.success(`${data.user.name} was successfully registred`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })

export const logInUser = createAsyncThunk(
    "auth/login", async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/login", credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })

export const logOut = createAsyncThunk(
    "auth/logout", async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout");
            token.unset();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })

export const refreshCurrentUser = createAsyncThunk(
    "auth/refresh", async (_, thunkAPI) => {

        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }
        token.set(persistedToken);

        try {
            const { data } = await axios.get("/users/current");
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })   