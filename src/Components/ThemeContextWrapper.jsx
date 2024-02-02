import React, {useState} from 'react'

const ThemeContext = React.createContext();

const ThemeContextWrapper = ({children}) => {
    const [theme, setTheme] = useState("light");
    const handleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");
    return (
        <ThemeContext.Provider value={{handleTheme, theme}} >
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextWrapper, ThemeContext}