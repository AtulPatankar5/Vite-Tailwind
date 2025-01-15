import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaArrowLeft, FaArrowRight, FaThumbtack, FaHome, FaChartBar } from 'react-icons/fa';
import { setCurrentPage } from '../Store/userSlice';
import { useTheme } from '../context/ThemeContext';

const Sidebar = ({ isOpen, setIsOpen, isPinned, setIsPinned }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { currentTheme } = useTheme();

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

    useEffect(() => {
        const currentMenuItem = menuItems.find(item => item.path === location.pathname);
        if (currentMenuItem) {
            dispatch(setCurrentPage(currentMenuItem.label));
        }
    }, [location.pathname, dispatch, menuItems]);

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

    // const toggleSidebar = () => {
    //     if (isPinned) {
    //         setIsPinned(false);
    //     } else {
    //         setIsOpen(!isOpen);
    //     }
    // };

    const themeClass = {
        primary: currentTheme === 'orange' ? 'text-orange-500' : currentTheme === 'blue' ? 'text-blue-500' : 'text-gray-500',
        accent: currentTheme === 'orange' ? 'bg-orange-500' : currentTheme === 'blue' ? 'bg-blue-500' : 'bg-gray-500',
        text: currentTheme === 'orange' ? 'text-gray-800' : currentTheme === 'blue' ? 'text-gray-900' : 'text-white',
    };

    return (
        <div
            className={`fixed left-0 top-0 h-screen z-50 transition-all duration-300 ease-in-out 
            ${isPinned || isOpen ? 'w-72' : 'w-20'} themed-sidebar`}
            onMouseEnter={() => !isPinned && setIsOpen(true)}
            onMouseLeave={() => !isPinned && setIsOpen(false)}
        >
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    {(isOpen || isPinned) && (
                        <button
                            onClick={() => setIsPinned(!isPinned)}
                            className={`p-2 rounded-full transition-all duration-200  
                        ${isPinned ? `${themeClass.primary}/20 text-${themeClass.primary} ` : ''}`}
                        >
                            <FaThumbtack
                                className={`text-lg transform ${isPinned ? 'rotate-45' : ''} 
                            ${isPinned ? `hover:text-${themeClass.primary}` : 'hover:text-black'} 
                            dark:text-white`}
                            />
                        </button>

                    )}
                    <button className="p-2 rounded-full cursor-default">
                        {isOpen || isPinned ? <FaArrowLeft className='dark:text-white' /> : <FaArrowRight className='dark:hover:text-black dark:text-white' />}
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <nav className="flex flex-col gap-2 p-4">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={`group flex items-center gap-3 p-3 rounded-lg 
                                ${location.pathname === item.path
                                        ? `${themeClass.accent}/20 ${themeClass.primary} hover:bg-gray-200 dark:text-white dark:hover:text-black`
                                        : `${themeClass.text}/70 hover:bg-gray-200 dark:text-white dark:hover:text-black`}`}
                            >
                                <span className="text-xl">{item.icon}</span>
                                {(isOpen || isPinned) && (
                                    <div className="flex flex-col">
                                        <span className="font-medium">{item.label}</span>
                                        <span className="text-xs text-gray-500">{item.description}</span>
                                    </div>
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
