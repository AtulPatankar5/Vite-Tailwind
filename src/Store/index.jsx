import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "d:/VITE and Tailwind/Vite-Tailwind/src/store/navigationSlice.jsx"
import userReducer from './userSlice'

const store = configureStore({
    reducer: {
        data: userReducer,
        navigation: navigationReducer
    }
})

export default store;