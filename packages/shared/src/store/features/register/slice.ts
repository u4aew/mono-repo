import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { RootState } from "../index";
import { AppDispatch, Fetch } from "../../../types";
import config from "../../../config";

type SliceState = {
    fetchingState: Fetch;
    email: any;
    password: any
}

const initialState: SliceState = {
    fetchingState: Fetch.Idle,
    password: null,
    email: null
}

/**
 * * Начало регистрации
 * @param email - email
 */

export const start = createAsyncThunk<any, string, {
    dispatch: AppDispatch;
    state: RootState
}>('register/start', async (email, {rejectWithValue}) => {
    try {
        alert('342')
        const { data } = await axios.post(config.apiMethods.registerStart, {
            login: email,
        });
        console.log(data, '3243')
        return data
    } catch (error) {
       console.warn(error)
    }
})


const slice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        reset: (): SliceState => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(start.pending, (state, action) => {
            state.fetchingState = Fetch.Pending;
        })
        builder.addCase(start.fulfilled, (state, action) => {
            state.fetchingState = Fetch.Fulfilled;
        })
        builder.addCase(start.rejected, (state, action) => {
            state.fetchingState = Fetch.Idle;
        })
    }
})

export default slice.reducer
