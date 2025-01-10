import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notifications",
    initialState: { type: null, message: null },
    reducers: {
        showNotification(state, action) {
            state.type = action.payload.type;
            state.message = action.payload.message;
        },
        clearNotification(state) {
            state.type = null;
            state.message = null;
        },
    },
});

export const { showNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
