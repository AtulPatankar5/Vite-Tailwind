import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from './navigationSlice'
import userReducer from './userSlice'

const Store = configureStore({
    reducer: {
        data: userReducer,
        navigation: navigationReducer
    }
})

export default Store;