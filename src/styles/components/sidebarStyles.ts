import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const drawerWidth = 200

const sidebarStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOnHover: {
      width: `${drawerWidth}px!important`,
      backgroundColor: `${theme.palette.background.default} !important`,
      height: "auto",
    },
    mobileDrawer: {
      backgroundColor: `${theme.palette.background.default} !important`,
      height: "auto",
      top: "30%",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      top: "30%",
      backgroundColor: "transparent",
      border: "none",
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
      top: "30%",
      backgroundColor: "transparent",
      border: "none",
    },
  })
)

export default sidebarStyles
