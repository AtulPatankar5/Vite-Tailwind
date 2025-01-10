import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { logoutUser } from "../services/authServices";
import { clearHistory } from "../Store/navigationSlice";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../Store/notificationSlice";

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
        <>
            <div className="flex flex-col min-h-screen">
                {/* Dashboard block at the top */}
                <div className="relative flex flex-col items-center justify-start bg-gradient-to-b border-b-2 border-orange-500 shadow-glow-bottom">
                    {username && (
                        <>
                            {/* Centered username at the top */}
                            <h4 className="text-3xl font-semibold text-gray-800 mt-4 mb-4">Dashboard</h4>

                            {/* Logout button positioned at the top-right corner */}
                            <button
                                className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300"
                                onClick={handleLogoutEvent}
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>

                {/* Centered Welcome message */}
                {username && (
                    <div className="flex-grow flex items-center justify-center text-center mb-8">
                        <h4 className="text-3xl font-semibold text-gray-800">Welcome, {username}</h4>
                    </div>
                )}

                {/* Footer positioned at the bottom */}
                <Footer />
            </div>
        </>
    );
};
