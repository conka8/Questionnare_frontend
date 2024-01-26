import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { dark, light } from '../theme'

const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext({
    isDark: null,
    toggleTheme: () => { },
})

const ThemeContextProvider = ({ children }: any) => {
    const [isDark, setIsDark] = useState(() => {
        const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
        return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : true
    })

    const toggleTheme = () => {
        setIsDark((prevState: any) => {
            localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
            return !prevState
        })
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            <SCThemeProvider theme={isDark ? dark : light}>{children}</SCThemeProvider>
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }
