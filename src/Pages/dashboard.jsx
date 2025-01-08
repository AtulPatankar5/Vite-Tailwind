import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Helper function to fetch user from localStorage as a fallback
function getUser() {
    let user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export const Dashboard = () => {
    // Use Redux to fetch the username, fallback to localStorage if Redux state is empty
    const { username } = useSelector((state) => state.user) || getUser();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {username ? (
                <div className="text-center bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-2xl font-semibold text-gray-800">Hello, {username}</h4>
                    <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
                        Logout
                    </button>
                </div>
            ) : (
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium underline">
                    Login
                </Link>
            )}
        </div>
    );
};
