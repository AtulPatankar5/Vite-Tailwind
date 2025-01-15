import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPinned, setIsPinned] = useState(false);

    return (
        <div className="flex min-h-screen">
            <Sidebar isOpen={isOpen} isPinned={isPinned} setIsOpen={setIsOpen} setIsPinned={setIsPinned} />
            <div className={`flex-grow flex flex-col ${isOpen || isPinned ? 'ml-72' : 'ml-20'}`}>
                <Header isOpen={isOpen} isPinned={isPinned} />
                <div className="flex-grow p-4">
                    <h4 className="text-3xl font-semibold text-center">Welcome to the dashboard</h4>
                </div>
                <Footer />
            </div>
        </div>
    );
};
