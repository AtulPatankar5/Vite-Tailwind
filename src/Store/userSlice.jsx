import { createSlice } from "@reduxjs/toolkit";
// import hostName from commonconstants;

import { loginUser } from "../services/commonConstants";

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