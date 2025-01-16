import axios from 'axios';
// import AuthService from './authService';

export const REACT_APP_REDUX_ENCRYPTION_KEY = 'kuchbhi'

// export let baseUrl = ''
// export let HostURL = '';
// const appPath = '/pi-control-adapter/'


// baseUrl = window.location.origin.toString();

// if (baseUrl.includes('localhost')) {
//     baseUrl = remoteServerForLocal;
// }

// HostURL = baseUrl + appPath;


// const remoteServerForLocal = "https://iam-fips-enabled-projects.apps.tj87n1bc.centralindia.aroapp.io";
// const remoteServerForLocal = "http://127.0.0.1:9443";

// export const commonPost = (postPara, data) => {
//     let auth = sessionStorage.getItem('Authorization');
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': auth,
//             // 'Server-Id': '*'
//         },
//         data: data,
//         url: HostURL + postPara,
//     };
//     return axios(options);
// }