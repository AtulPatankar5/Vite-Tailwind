import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        const body = JSON.stringify({ username: userCredentials.username, password: userCredentials.password, authenticationType: "mfa" });
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                // 'Server-Id': '*'
            }
        };
        const request = await axios.post(`https://98.70.8.129:8443/pi-control-adapter/v4/users/authenticate`, body, requestOptions)
        const response = await request.data;
        localStorage.setItem('user', JSON.stringify(response));
        return response
    }
);