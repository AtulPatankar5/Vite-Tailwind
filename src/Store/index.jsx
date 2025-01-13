import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from './navigationSlice'
import userReducer from './userSlice'
import notificationReducer from './notificationSlice'
import { persistReducer } from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const reducers = combineReducers({
    data: userReducer,
    navigation: navigationReducer,
    notifications: notificationReducer,
})

const persistedReducers = persistReducer(persistConfig, reducers);

const Store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'], // Ignore redux-persist actions
            },
        }),
})

export default Store;