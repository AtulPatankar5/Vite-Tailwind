import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from './navigationSlice'
import userReducer from './userSlice'
import notificationReducer from './notificationSlice'
import { persistReducer } from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';
import { createTransform } from 'redux-persist';
import CryptoJS from 'crypto-js';
import { REACT_APP_REDUX_ENCRYPTION_KEY } from "../services/commonConstants";

const SECRET_KEY = REACT_APP_REDUX_ENCRYPTION_KEY // Fallback key for development

const encryptData = (data) => {
    try {
        if (!data) return data;
        const jsonStr = JSON.stringify(data);
        const encrypted = CryptoJS.AES.encrypt(jsonStr, SECRET_KEY);
        return encrypted.toString();
    } catch (error) {
        console.error('Encryption error:', error);
        return null;
    }
};

const decryptData = (encryptedData) => {
    try {
        if (!encryptedData) return encryptedData;

        if (typeof encryptedData === 'object') {
            return encryptedData;
        }

        const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
        const decryptedStr = bytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedStr) {
            throw new Error('Decryption resulted in empty string');
        }

        return JSON.parse(decryptedStr);
    } catch (error) {
        console.error('Decryption error:', error);
        return null;
    }
};

const encryptTransform = createTransform(
    // encrypt
    (inboundState) => {
        const encrypted = encryptData(inboundState);
        return encrypted !== null ? encrypted : inboundState;
    },
    // decrypt
    (outboundState) => {
        const decrypted = decryptData(outboundState);
        return decrypted !== null ? decrypted : outboundState;
    }
);

// Clear persisted state if it exists and might be corrupted
const clearPersistedState = () => {
    try {
        localStorage.removeItem('persist:root');
    } catch (error) {
        console.error('Error clearing persisted state:', error);
    }
};

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    transforms: [encryptTransform],
    // Whitelist specific reducers that contain sensitive data and needs to be encrypted
    whitelist: ['data', 'notifications'],

    // debug: process.env.NODE_ENV !== 'production' // Debug mode for development will not work in production.
};

const reducers = combineReducers({
    data: userReducer,
    navigation: navigationReducer,
    notifications: notificationReducer,
});

const persistedReducers = persistReducer(persistConfig, reducers);

const Store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                ignoredActionPaths: ['register', 'rehydrate'],
            },
        }),
});

let persistor = persistStore(Store, null, () => {
    console.log('Redux persistor rehydration completed');
});

export { Store, persistor };