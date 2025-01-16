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
                // You can add other headers as needed, but remove createAsyncThunk
            }
        };

        try {
            const request = await axios.post(`https://iam-fips-enabled-projects.apps.tj87n1bc.centralindia.aroapp.io/pi-control-adapter/v4/users/authenticate`, body, requestOptions);
            const response = await request.data;
            console.log("Request of Login API==>", request);
            return response;
        } catch (err) {
            console.log("error=>", err);
            return err;
        }
    }
);


export const logoutUser = createAsyncThunk(
    'data/logoutUser',
    async ({ username, token }) => {
        const loginConst = 'D98A47936BBD8135';
        console.log("Bearer token==>", token);
        const eusername = CryptoJS.AES.encrypt(username, loginConst).toString();

        const requestOptions = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                // You can add other headers as needed, but remove createAsyncThunk
            }
        };

        const body = JSON.stringify({ username: eusername });
        try {
            const request = await axios.post("https://iam-fips-enabled-projects.apps.tj87n1bc.centralindia.aroapp.io/pi-control-adapter/v3/users/logout", body, requestOptions);
            // const request = await axios.post(`http://127.0.0.1:9443/pi-control-adapter/v3/users/logout`, body, requestOptions);
            const response = await request.data;
            console.log("Response of Logout API==>", response);
            return response;
        } catch (err) {
            console.log("error=>", err);
            return err;
        }
    }
);
