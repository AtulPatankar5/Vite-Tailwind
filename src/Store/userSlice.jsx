import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import hostName from commonconstants;

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        const body = JSON.stringify({ username: userCredentials.username, password: userCredentials.password, authenticationType: "mfa" });
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                // 'Server-Id': '*'
            }
        };
        const request = await axios.post(`https://98.70.8.129:8443/pi-control-adapter/v4/users/authenticate`, body, requestOptions)
        const response = await request.data;
        localStorage.setItem('user', JSON.stringify(response));
        return response
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: '',
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (action.error.message === "Network Error") {
                    state.error = 'Cannot connect to the server'
                } else {
                    state.error = action.error.message;
                }

            })
    }
})

export default userSlice.reducer;