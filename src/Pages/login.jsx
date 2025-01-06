import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Store/userSlice';

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
                navigate('/');
            }
        })
    }

    return (
        <div>
            <div className='border h-96  rounded-3xl  p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-full max-w-lg glow-effect'>
                <form onSubmit={handleLoginEvent}>
                    <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Login</h1>
                    <div className='relative my-4'>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='block w-72  py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-600 peer' placeholder='' />
                        <label htmlFor="" className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> Username</label>
                    </div>
                    <div className='relative my-8'>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='block w-72  py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-600 peer' placeholder='' />
                        <label htmlFor="" className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                    </div>
                    <div className='flex justify-between items-center'>
                        {/* <div className='flex gap-2 items-center hover:cursor-pointer'>
                            <input type="checkbox" name="remember" id="rememberMe" className='hover:cursor-pointer' />
                            <label htmlFor="rememberMe" className='hover:cursor-pointer'> Remember Me</label>
                        </div> */}

                        {/* Submit Button */}
                        <button
                            type="Submit"
                            className="w-full mb-4 border border-orange-300 text-[18px] rounded-full font-semibold bg-white text-orange-900 hover:bg-orange-700 hover:text-white py-2 transition-colors duration-300 my-10"
                        >
                            {loading ? 'Loading' : 'Login'}
                        </button>

                        {/* Sign-up Link */}
                        <div>
                            <span className="m-4">New here ? <Link className="text-blue-900" to="/Register">Create an Account</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;