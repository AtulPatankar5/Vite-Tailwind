import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from 'crypto-js';

export const loginUser = createAsyncThunk(
    'user/loginUser',
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