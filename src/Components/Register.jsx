import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="flex justify-center items-center  bg-cover">
            <div className="border h-auto md:h-96 rounded-3xl p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
                <form>
                    <h1 className="text-4xl text-black font-bold text-center mb-6">Register</h1>

                    {/* Name Field */}
                    <div className="relative my-8">
                        <input
                            type="text"
                            className="block w-full sm:w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-orange-600 peer"
                            placeholder=""
                        />
                        <label
                            htmlFor=""
                            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Your Name
                        </label>
                    </div>

                    {/* Email Field */}
                    <div className="relative my-8">
                        <input
                            type="email"
                            className="block w-full sm:w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-orange-600 peer"
                            placeholder=""
                        />
                        <label
                            htmlFor=""
                            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Your Email
                        </label>
                    </div>

                    {/* Password Field */}
                    <div className="relative my-8">
                        <input
                            type="password"
                            className="block w-full sm:w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-orange-600 peer"
                            placeholder=""
                        />
                        <label
                            htmlFor=""
                            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Your Password
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="Submit"
                        className="w-full mb-4 border border-orange-300 text-[18px] rounded-full font-semibold bg-white text-orange-900 hover:bg-orange-700 hover:text-white py-2 transition-colors duration-300 my-3"
                    >
                        Register
                    </button>

                    {/* Login Link */}
                    <div>
                        <span className="m-4">Already have an account? <Link className="text-blue-900" to="/">Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
}
