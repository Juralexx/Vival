import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './Theme';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'

const ThemeToggle = () => {
    const [checked, setChecked] = useState()
    const [localStorageTheme, setlocalStorageTheme] = useState()

    useEffect(() => {
        setlocalStorageTheme(localStorage.getItem("theme"))
        const handleTheme = () => {
            if (localStorageTheme === "dark") {
                setChecked(false)
            } else {
                setChecked(true)
            }
        }
        handleTheme()
    }, [])

    return (
        <>
            <div className="flex items-center h-full">
                {checked ? (
                    <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                            <div className="theme-toggle">
                                <button onClick={() => {
                                    setChecked(false)
                                    changeTheme(themes.dark);
                                }}>
                                    <BsFillSunFill />
                                </button>
                            </div>
                        )}
                    </ThemeContext.Consumer>
                ) : (
                    <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                            <div className="theme-toggle">
                                <button onClick={() => {
                                    setChecked(true)
                                    changeTheme(themes.light);
                                }}>
                                    <BsFillMoonStarsFill />
                                </button>
                            </div>
                        )}
                    </ThemeContext.Consumer>
                )}
            </div>
        </>
    )
}

export default ThemeToggle;