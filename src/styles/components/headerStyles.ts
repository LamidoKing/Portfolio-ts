import { makeStyles, createStyles, Theme } from "@material-ui/core"
import { containerFluid } from "../genaral/generalStyles"

const styles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.background.default,
      zIndex: 1029,
      padding: "10px 0",
      minHeight: "50px",
      display: "block",
    },
    container: {
      ...containerFluid,
      minHeight: "50px",
    },
    flex: {
      flex: 1,
    },
    title: {
      textTransform: "none",
      "&:hover,&:focus": {
        background: "transparent",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
      },
      "@media only screen and (max-width: 320px)": {
        fontSize: "10px",
      },
    },
    sidebarMenuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      animation: `heartbeat 1.8s infinite`,
      "@media only screen and (max-width: 320px)": {
        display: "none",
      },
    },
    "@global": {
      "@keyframes heartbeat": {
        "0%": {
          transform: "translateY(2)",
        },

        "25%": {
          transform: "translateY(2.05)",
        },

        "50%": {
          transform: "translateY(2)",
        },

        "75% ": {
          transform: "translateY(2.05)",
        },

        "100%": {
          transform: "translateY(2)",
        },
      },
    },
  })
)

export default styles
