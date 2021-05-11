import { createMuiTheme } from "@material-ui/core"

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#b2b2b2",
      contrastText: "#000",
    },
    secondary: {
      light: "#339f9e",
      main: "#018786",
      dark: "#005e5d",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          display: "none",
        },
      },
    },
  },
})

export default lightTheme
