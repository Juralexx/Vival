import { createContext } from "react";

export const themes = {
    dark: "dark",
    light: "clear",
};

export const ThemeContext = createContext({
    theme: themes.light,
    changeTheme: () => { },
});