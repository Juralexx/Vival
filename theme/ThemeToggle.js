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

    console.log(localStorageTheme)

    const classes = {
        svg: "w-9 h-9 p-2 rounded-full text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-background_primary_x_light group-hover:bg-white dark:group-hover:bg-background_primary_light",
        p: "pl-[10px] font-xs text-slate-500 dark:text-slate-300"
    }

    return (
        <>
            <div className="flex items-center h-full">
                {checked ? (
                    <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                            <button className="switch" onClick={() => {
                                setChecked(false)
                                changeTheme(themes.dark);
                            }}
                            >
                                <BsFillSunFill className={classes.svg} />
                            </button>
                        )}
                    </ThemeContext.Consumer>
                ) : (
                    <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                            <button className="switch" onClick={() => {
                                setChecked(true)
                                changeTheme(themes.light);
                            }}
                            >
                                <BsFillMoonStarsFill className={classes.svg} />
                            </button>
                        )}
                    </ThemeContext.Consumer>
                )}
            </div>
        </>
    )
}

export default ThemeToggle;