// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaArrowLeft, FaArrowRight, FaThumbtack, FaHome, FaChartBar } from 'react-icons/fa';
import { setCurrentPage } from '../Store/userSlice';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();

    // Memoized menu items to prevent unnecessary re-renders
    const menuItems = useMemo(() => [
        {
            path: '/dashboard',
            label: 'Dashboard',
            icon: <FaHome />,
            description: 'Overview and analytics',
        },
        {
            path: '/navigation-history',
            label: 'Navigation',
            icon: <FaChartBar />,
            description: 'Data and insights',
        },
    ], []);

    // Dispatch the current page's label to Redux store whenever location changes
    useEffect(() => {
        const currentMenuItem = menuItems.find(item => item.path === location.pathname);
        if (currentMenuItem) {
            dispatch(setCurrentPage(currentMenuItem.label));
        }
    }, [location.pathname, dispatch, menuItems]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768 && isPinned) {
                setIsPinned(false);
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isPinned]);

    const toggleSidebar = () => {
        if (isPinned) {
            setIsPinned(false);
        } else {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div
            className={`fixed left-0 top-0 h-screen z-50 transition-all duration-300 ease-in-out 
        ${isPinned || isOpen ? 'w-72' : 'w-20'} 
        bg-white shadow-lg
        md:relative`}
            onMouseEnter={() => !isPinned && setIsOpen(true)}
            onMouseLeave={() => !isPinned && setIsOpen(false)}
        >
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    {(isOpen || isPinned) && (
                        <button
                            onClick={() => setIsPinned(!isPinned)}
                            className={`p-2 rounded-full transition-all duration-200 
                                ${isPinned ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'}`}
                            aria-label={isPinned ? 'Unpin Sidebar' : 'Pin Sidebar'}
                        >
                            <FaThumbtack
                                className={`text-lg transform transition-transform duration-300 
                                    ${isPinned ? 'rotate-45' : ''}`}
                            />
                        </button>
                    )}
                    <button
                        onClick={toggleSidebar}
                        className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 cursor-default"
                        aria-label={isOpen || isPinned ? 'Collapse Sidebar' : 'Expand Sidebar'}
                    >
                        {isOpen || isPinned ? <FaArrowLeft /> : <FaArrowRight />}
                    </button>
                </div>

                {/* Scrollable Menu */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <nav className="flex flex-col gap-2 p-4">
                        {menuItems.map((item, index) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 
                                        ${isActive ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}
                                        ${!isOpen && !isPinned ? 'justify-center' : ''}`}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    {(isOpen || isPinned) && (
                                        <div className="flex flex-col">
                                            <span className="font-medium">{item.label}</span>
                                            <span className="text-xs text-gray-500">{item.description}</span>
                                        </div>
                                    )}
                                    {!isOpen && !isPinned && (
                                        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm 
                      rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                            {item.label}
                                        </div>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
