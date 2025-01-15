// import React from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Palette } from 'lucide-react';

const ThemeToggle = () => {
    const { currentTheme, toggleTheme } = useTheme();

    const getThemeIcon = () => {
        switch (currentTheme) {
            case 'orange':
                return <Palette className="h-5 w-5" />;
            case 'blue':
                return <Sun className="h-5 w-5" />;
            case 'dark':
                return <Moon className="h-5 w-5" />;
            default:
                return <Palette className="h-5 w-5" />;
        }
    };

    const getThemeText = () => {
        switch (currentTheme) {
            case 'orange':
                return 'Orange Theme';
            case 'blue':
                return 'Blue Theme';
            case 'dark':
                return 'Dark Theme';
            default:
                return 'Theme';
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 themed-button"
            title="Toggle theme"
        >
            {getThemeIcon()}
            <span className="text-sm font-medium">{getThemeText()}</span>
        </button>
    );
};

export default ThemeToggle;