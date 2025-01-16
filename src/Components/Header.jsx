import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setLoginTime } from '../Store/userSlice';
import { FaUserCircle } from 'react-icons/fa';
import { logoutUser } from '../services/authServices';
import { clearHistory } from "../Store/navigationSlice";
import { showNotification } from "../Store/notificationSlice";
import ThemeToggle from '../context/themeToggle';

const Header = ({ isOpen, isPinned }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username, token } = useSelector(state => state.data.user);
    const { loginTime, currentPage } = useSelector(state => state.data);

    useEffect(() => {
        if (!loginTime) {
            const currentTime = new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            });
            dispatch(setLoginTime(currentTime));
        }
    }, [dispatch, loginTime]);

    const handleLogoutEvent = () => {
        dispatch(logoutUser({ username, token })).then((result) => {
            if (result.payload.status === "SUCCESS") {
                dispatch(showNotification({ type: "info", message: "User Logged Out" }));
                navigate('/');
            }
        });
        dispatch(clearHistory());
        console.log('User logged out');
    };

    return (
        <div
            className={`relative flex items-center justify-between bg-white p-4 text-black border-b border-gray-200 transition-all duration-300 
            ${isOpen || isPinned ? 'ml-72' : 'ml-20'}`}
        >
            {username ? (
                <>
                    {/* Dashboard Title */}
                    <h4 className="text-3xl font-semibold">{currentPage}</h4>

                    {/* Center section with Theme Toggle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <ThemeToggle />
                    </div>

                    {/* Right section with Login Info and Logout */}
                    <div className="flex items-center space-x-4">
                        <div className="text-center">
                            <span className="text-sm block">Logged in since:</span>
                            <span className="text-sm font-medium">{loginTime}</span>
                        </div>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300"
                            onClick={handleLogoutEvent}
                        >
                            Logout
                        </button>
                    </div>
                </>
            ) : (
                navigate('/')
                // <div className="flex items-center space-x-4">
                //     {/* Guest User Icon */}
                //     <div className="p-2 rounded-full bg-gray-100 text-gray-500">
                //         <FaUserCircle className="text-3xl" />
                //     </div>
                //     <div>
                //         <span className="text-gray-800 text-lg font-semibold block">Guest</span>
                //         <span className="text-gray-500 text-sm block">
                //             Please log in to access the dashboard
                //         </span>
                //     </div>
                //     {/* Theme Toggle for guest users */}
                //     <div className="ml-auto">
                //         <ThemeToggle />
                //     </div>
                // </div>
            )}
        </div>
    );
};

export default Header;
