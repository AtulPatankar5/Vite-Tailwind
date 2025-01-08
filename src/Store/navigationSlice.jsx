import { createSlice } from "@reduxjs/toolkit";


const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        navigationHistory: []
    },
    reducers: {
        navigateTo(state, action) {
            state.navigationHistory.push(action.payload);
        },
        // goBack(state) {
        //     if (state.navigationHistory.length > 1) {
        //         state.navigationHistory.pop();
        //     }
        // },
        clearHistory(state) {
            state.navigationHistory = []; // Clearing the navigation history
        },
    }
})

export const { navigateTo, goBack, clearHistory } = navigationSlice.actions;
export default navigationSlice.reducer;