// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setLoginTime } from '../Store/userSlice';
import { FaUserCircle } from 'react-icons/fa';
import { logoutUser } from '../services/authServices';
import { clearHistory } from "../Store/navigationSlice";
import { showNotification } from "../Store/notificationSlice";

const Header = () => {
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
                dispatch(showNotification({ type: "info", message: "User Logged Out" }))
                navigate('/');
            }
        });
        dispatch(clearHistory());
        console.log('User logged out');
    };

    return (
        <div className="relative flex items-center justify-between bg-gradient-to-b from-gray-100 to-gray-300 border-b-2 border-orange-500 shadow-glow-bottom p-4">
            {username ? (
                <>
                    {/* Dashboard Title */}
                    <h4 className="text-3xl font-semibold text-gray-800">{currentPage}</h4>

                    {/* Logged-in Info */}
                    <div className="flex items-center space-x-4">
                        <div className="text-center">
                            <span className="text-sm text-gray-600 block">Logged in since:</span>
                            <span className="text-sm font-medium text-gray-800">{loginTime}</span>
                        </div>
                    </div>

                    {/* Logout Button */}
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300"
                        onClick={handleLogoutEvent}
                    >
                        Logout
                    </button>
                </>
            ) : (
                <div className="flex items-center space-x-4">
                    {/* Guest User Icon */}
                    <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                        <FaUserCircle className="text-3xl" />
                    </div>
                    <div>
                        <span className="text-gray-800 text-lg font-semibold block">Guest</span>
                        <span className="text-gray-600 text-sm block">
                            Please log in to access the dashboard
                        </span>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Header;
