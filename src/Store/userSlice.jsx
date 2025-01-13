import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../services/authServices";

const userSlice = createSlice({
    name: 'data',
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
                    state.error = 'Cannot connect to the server';
                } else {
                    state.error = action.error.message;
                }
            })
            // Handle logout actions
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.user = '';
                state.error = null;
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Logout failed';
            });
    }
});

export default userSlice.reducer;
