import { createMuiTheme } from "@material-ui/core"

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#414141",
      main: "#121212",
      dark: "#0c0c0c",
      contrastText: "#fff",
    },
    secondary: {
      light: "#35e1d1",
      main: "#03dac6",
      dark: "#02988a",
      contrastText: "#000",
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

export default darkTheme
