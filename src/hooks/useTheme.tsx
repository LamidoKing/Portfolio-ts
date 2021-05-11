import { useContext } from "react"
import { ThemeContext } from "../theme/themeStore"
import { getToken } from "../utils"

const useTheme = () => {
  const changeTheme = useContext(ThemeContext)

  const currentTheme = getToken("Theme")

  return { changeTheme, currentTheme }
}

export default useTheme
