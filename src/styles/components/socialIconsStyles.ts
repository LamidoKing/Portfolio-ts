import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { whiteColor, grayColor, linkedinColor } from "../genaral/generalStyles"

const socialIconsStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      transform: "translateZ(0px)",
    },
    speedDial: {
      position: "absolute",
      top: theme.spacing(-1),
      right: theme.spacing(10),
      paddingTop: "4px",
      color: theme.palette.secondary.light,
    },
    speedDialMobile: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    speedDialFab: {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.light,
    },
    color: {
      color: theme.palette.secondary.main,
    },
    linkedin: {
      backgroundColor: linkedinColor,
      color: whiteColor,
      "&:hover,&:focus": {
        backgroundColor: linkedinColor,
        color: whiteColor,
      },
    },
    github: {
      backgroundColor: grayColor[7],
      color: whiteColor,
      "&:hover,&:focus": {
        backgroundColor: grayColor[7],
        color: whiteColor,
      },
    },
  })
)

export default socialIconsStyles
