/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../services/commonConstants';

export const Login = () => {

    //state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    //redux state
    const { loading, error } = useSelector((state) => state.user)


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredentials = {
            username, password
        }
        dispatch(loginUser(userCredentials)).then((result) => {
            if (result.payload) {
                setUsername('');
                setPassword('');
                navigate('/dashboard');
            }
        })
    }

    return (
        <div className="flex justify-center items-center bg-cover ">
            <div className="border h-auto md:h-96 rounded-3xl p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <form onSubmit={handleLoginEvent} >
                    <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Login</h1>
                    <div className='relative my-12'>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='block w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-orange-600 peer' placeholder='' />
                        <label htmlFor="" className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> Username</label>
                    </div>
                    <div className='relative my-8'>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='block w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-orange-600 peer' placeholder='' />
                        <label htmlFor="" className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                    </div>
                    <div className='flex justify-between items-center'>
                        <button type="Submit" className="w-full mb-4 border border-orange-300 text-[18px] rounded-full font-semibold bg-orange-600 text-white hover:bg-orange-800 hover:text-white py-2 transition-colors duration-300 my-10">
                            {loading ? 'Loading' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;