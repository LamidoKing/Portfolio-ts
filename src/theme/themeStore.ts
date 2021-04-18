import { createContext } from "react"
import { Theme } from "@material-ui/core"
import { getToken } from "../utils"
import lightTheme from "../styles/theme/lighTheme"
import darkTheme from "../styles/theme/darkTheme"

const ThemesName = {
  lightTheme: "lightTheme",
  darkTheme: "darkTheme",
}

const themes: { [key: string]: Theme } = {
  lightTheme,
  darkTheme,
}

const currentTheme = getToken("Theme") || "lightTheme"

const getTheme = (theme: string): Theme => {
  return themes[theme]
}

const ThemeContext = createContext(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  <T extends keyof typeof ThemesName>(theme: T): void => {}
)

const ContextProvider = ThemeContext.Provider

export { currentTheme, getTheme, ThemeContext, ContextProvider, ThemesName }
