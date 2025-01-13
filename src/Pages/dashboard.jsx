import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

export const Dashboard = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-grow flex flex-col">
                <Header />
                <div className="flex-grow flex items-center justify-center text-center mb-8">
                    <h4 className="text-3xl font-semibold text-gray-800">Welcome, to dashboard</h4>
                </div>
                <Footer />
            </div>
        </div>
    );
};
