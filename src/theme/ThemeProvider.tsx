import { ReactNode, useState } from "react"
import { CssBaseline, ThemeProvider as Provider } from "@material-ui/core"
import { setToken } from "../utils"
import {
  ContextProvider,
  getTheme,
  currentTheme,
  ThemesName,
} from "./themeStore"

interface Props {
  children: ReactNode
}

const ThemeProvider = (props: Props) => {
  const [themeType, setThemeType] = useState(currentTheme)
  const { children } = props

  const changeTheme = <T extends keyof typeof ThemesName>(theme: T): void => {
    setToken("Theme", theme)
    setThemeType(theme)
  }

  const theme = getTheme(themeType)

  return (
    <ContextProvider value={changeTheme}>
      <Provider theme={theme}>
        <CssBaseline />
        {children}
      </Provider>
    </ContextProvider>
  )
}

export default ThemeProvider
