import { makeStyles, createStyles } from "@material-ui/core/styles"

const fallbackStyles = makeStyles(
  createStyles({
    loading: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      animation: `fadeOut 1s`,
      animationFillMode: "forwards",
    },
    "@global": {
      "@keyframes fadeOut": {
        from: {
          opacity: 1,
        },
        to: {
          opacity: 0,
        },
      },
    },
  })
)

export default fallbackStyles
