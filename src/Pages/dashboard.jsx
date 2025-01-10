import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../services/authServices';
import { clearHistory } from '../Store/navigationSlice';
import { showNotification } from '../Store/notificationSlice';

export const Dashboard = () => {
    const { username, token } = useSelector((state) => state.data.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutEvent = () => {
        dispatch(logoutUser({ username, token })).then((result) => {
            if (result.payload.status === "SUCCESS") {
                dispatch(showNotification({ type: "info", message: "User Logged Out" }))
                navigate('/');
            }
        });
        dispatch(clearHistory());
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
            {username ? (
                <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                    <h4 className="text-3xl font-semibold text-gray-800 mb-4">Hello, {username}</h4>
                    <div className="space-y-4">
                        <button
                            className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300"
                            onClick={handleLogoutEvent}
                        >
                            Logout
                        </button>
                        <Link
                            to="/navigation-history"
                            className="block w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                        >
                            View Navigation History
                        </Link>
                    </div>
                </div>
            ) : (
                null
            )}
        </div>
    );
};
