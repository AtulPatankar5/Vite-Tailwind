import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../services/authServices';
import { toast } from 'react-toastify';
import { showNotification } from '../Store/notificationSlice';
import Footer from '../Components/Footer';

export const Login = () => {

    //state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    //redux state
    const { loading, error } = useSelector((state) => state.data)


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLoginEvent = (e) => {
        e.preventDefault();
        const userCredentials = {
            username,
            password,
        };

        dispatch(loginUser(userCredentials))
            .then((result) => {
                console.log("Result of API call:", result);

                if (result.payload) {
                    // Check the API response for success
                    if (result.payload.status === 'SUCCESS') {
                        dispatch(showNotification({ type: "success", message: "Login successful!" }));
                        setUsername('');
                        setPassword('');
                        navigate('/dashboard');
                    } else {
                        // Handle the failure case (invalid credentials, etc.)
                        dispatch(showNotification({ type: "error", message: result.payload.response.data.developerMessage }));
                    }
                }
            })
            .catch(() => {
                // Handle network errors or unexpected API failures
                console.log("Login API error response:", error);
                const errorMessage = error.response?.data?.message || error.message || 'Login failed due to a network error!';
                toast.error(errorMessage);
            });
    };


    return (
        <>
            <div className="flex-grow flex justify-center items-center bg-current-theme-background min-h-screen">
                <div className="flex justify-center items-center">
                    <div className="border h-auto md:h-96 rounded-3xl p-8 shadow-lg 
                        backdrop-filter backdrop-blur-sm bg-current-theme-background/30 
                        relative w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                        <form onSubmit={handleLoginEvent}>
                            <h1 className="text-4xl font-bold text-center mb-6 text-current-theme-text">
                                Login
                            </h1>
                            <div className="relative my-12">
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 py-2.3 px-0 
                                        text-sm text-current-theme-text bg-transparent border-0 border-b-2 
                                        border-current-theme-accent/30 appearance-none focus:outline-none 
                                        focus:ring-0 focus:border-current-theme-primary peer"
                                    placeholder=""
                                />
                                <label className="absolute text-sm text-current-theme-text/70 duration-300 transform 
                                    -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 
                                    peer-focus:text-current-theme-primary peer-placeholder-shown:scale-100 
                                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Username
                                </label>
                            </div>
                            <div className="relative my-8">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 py-2.3 px-0 
                                        text-sm text-current-theme-text bg-transparent border-0 border-b-2 
                                        border-current-theme-accent/30 appearance-none focus:outline-none 
                                        focus:ring-0 focus:border-current-theme-primary peer"
                                    placeholder=""
                                />
                                <label className="absolute text-sm text-current-theme-text/70 duration-300 transform 
                                    -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 
                                    peer-focus:text-current-theme-primary peer-placeholder-shown:scale-100 
                                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Password
                                </label>
                            </div>
                            <div className="flex justify-between items-center">
                                <button
                                    type="submit"
                                    className="w-full mb-4 text-[18px] rounded-full font-semibold 
                                        themed-button py-2 transition-colors duration-300 my-10"
                                >
                                    {loading ? 'Loading...' : 'Login'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;