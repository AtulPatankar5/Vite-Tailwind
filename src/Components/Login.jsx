import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <div>
            <div className='border h-96  rounded-3xl  p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-full max-w-lg glow-effect'>
                <form>
                    <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Login</h1>
                    <div className='relative my-4'>
                        <input type="email" className='block w-72  py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-600 peer' placeholder='' />
                        <label htmlFor="" className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> Your Email</label>
                    </div>
                    <div className='relative my-8'>
                        <input type="password" className='block w-72  py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-600 peer' placeholder='' />
                        <label htmlFor="" className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> Your Password</label>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center hover:cursor-pointer'>
                            <input type="checkbox" name="remember" id="rememberMe" className='hover:cursor-pointer' />
                            <label htmlFor="rememberMe" className='hover:cursor-pointer'> Remember Me</label>
                        </div>

                        <Link to="" className='text-blue-900'>Forgot Password ?</Link>
                    </div>
                    <button type="Submit" className='w-full mb-4 border border-orange-300 text-[18px] rounded-full font-semibold  bg-white text-orange-900 hover:bg-orange-700 hover:text-white py-2 transition-colors duration-300 my-10'>Login</button>
                    <div>
                        <span className='m-4'>New here ? <Link className='text-blue-900' to='/Register'>Create an Account</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
