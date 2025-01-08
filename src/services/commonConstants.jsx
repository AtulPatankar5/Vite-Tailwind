import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from 'crypto-js';

export const loginUser = createAsyncThunk(
    'data/loginUser',
    async (userCredentials) => {
        const loginConst = 'D98A47936BBD8135';
        const epassword = CryptoJS.AES.encrypt(userCredentials.password, loginConst).toString();
        const eusername = CryptoJS.AES.encrypt(userCredentials.username, loginConst).toString();
        const body = JSON.stringify({ username: eusername, password: epassword, authenticationType: "mfa" });
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                // 'Server-Id': '*'
            }
        };

        const request = await axios.post(`https://iam-fips-enabled-projects.apps.tj87n1bc.centralindia.aroapp.io/pi-control-adapter/v4/users/authenticate`, body, requestOptions)
        const response = await request.data;
        localStorage.setItem('user', JSON.stringify(response));
        console.log("Response of Login API==>", response)
        return response
    }
);

export const logoutUser = createAsyncThunk(
    'data/logoutUser',
    async ({ username, token }) => {
        const loginConst = 'D98A47936BBD8135'
        console.log("Bearer token==>", token)
        const eusername = CryptoJS.AES.encrypt(username, loginConst).toString();

        const requestOptions = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                // 'Server-Id': '*'
            }
        };

        const body = JSON.stringify({ username: eusername });
        const request = await axios.post("https://iam-fips-enabled-projects.apps.tj87n1bc.centralindia.aroapp.io/pi-control-adapter/v3/users/logout", body, requestOptions);
        const response = await request.data;
        console.log("Response of Logout API==>", response)
        return response
    }
)