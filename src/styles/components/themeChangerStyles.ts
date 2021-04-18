import { withStyles, Theme, createStyles } from "@material-ui/core/styles"

const styles = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    icon: {
      color: theme.palette.common.white,
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.palette.common.black,
        "& + $track": {
          backgroundColor: theme.palette.secondary.main,
          opacity: 1,
          border: `1px solid ${theme.palette.common.black}`,
        },
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.secondary.main}`,
      backgroundColor: theme.palette.secondary.main,
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  })
)

export default styles
