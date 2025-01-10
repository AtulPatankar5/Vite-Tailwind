import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from './navigationSlice'
import userReducer from './userSlice'
import notificationReducer from './notificationSlice'

const Store = configureStore({
    reducer: {
        data: userReducer,
        navigation: navigationReducer,
        notifications: notificationReducer,
    }
})

export default Store;