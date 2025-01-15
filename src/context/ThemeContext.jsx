import { createContext, useContext, useState, useEffect } from 'react';
import { themes } from './theme';

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(
        localStorage.getItem('theme') || themes.ORANGE
    );

    useEffect(() => {
        localStorage.setItem('theme', currentTheme);
        updateThemeClasses(currentTheme);
    }, [currentTheme]);

    const updateThemeClasses = (theme) => {
        const root = document.documentElement;
        root.classList.remove('theme-orange', 'theme-blue', 'theme-dark');
        root.classList.add(`theme-${theme}`);

        if (theme === themes.DARK) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    };

    const toggleTheme = () => {
        const themeOrder = [themes.ORANGE, themes.BLUE, themes.DARK];
        const currentIndex = themeOrder.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themeOrder.length;
        setCurrentTheme(themeOrder[nextIndex]);
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default ThemeContext;
