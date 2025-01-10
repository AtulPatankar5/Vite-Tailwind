import { useSelector } from 'react-redux';


const NavigationHistoryPage = () => {
    const navigationHistory = useSelector((state) => state.navigation?.navigationHistory || []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600">
            <div className="text-center bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
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
    );
};

export default NavigationHistoryPage;
