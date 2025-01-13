import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const NavigationHistoryPage = () => {
    const navigationHistory = useSelector((state) => state.navigation?.navigationHistory || []);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-grow flex flex-col">
                <Header />
                <div className="flex justify-center items-center bg-cover">
                    <div className="border h-auto md:h-96 rounded-3xl p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                        <h4 className="text-3xl font-semibold text-gray-800 mb-6">Navigation History</h4>
                        <div className="space-y-4">
                            <ul className="bg-gray-50 p-4 rounded-lg max-h-80 overflow-y-auto border border-gray-200">
                                {navigationHistory.length > 0 ? (
                                    navigationHistory.map((route, index) => (
                                        <li key={index} className="text-gray-700 py-2 px-3 border-b last:border-b-0">
                                            {index + 1}. {route}
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-gray-500">No history available.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationHistoryPage;
