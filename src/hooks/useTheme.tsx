import { useContext } from "react"
import { ThemeContext } from "../theme/themeStore"

const useTheme = () => {
  const changeTheme = useContext(ThemeContext)
  return changeTheme
}

export default useTheme
