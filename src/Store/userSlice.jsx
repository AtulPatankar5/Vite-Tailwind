import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../services/authServices";

const userSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        user: '',
        error: null,
        isVerified: false,
        loginTime: null,
        currentPage: ''
    },
    reducers: {
        setLoginTime: (state, action) => {
            state.loginTime = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
                state.isVerified = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
                state.isVerified = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isVerified = false;
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
                state.isVerified = false;
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

export const { setCurrentPage, setLoginTime } = userSlice.actions;

export default userSlice.reducer;
