import { createContext } from "react";

export const themes = {
  light: "white-content",
  dark: "",
};

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => {},
});
