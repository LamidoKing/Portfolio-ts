import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const pagesStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3, 3, 3, 0),
      overflowY: "hidden",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(3, 2),
      },
    },
    pageEnter: {
      opacity: 0,
      transform: `scale(1.1)`,
    },

    pageEnterActive: {
      opacity: 1,
      transform: `scale(1)`,
      transition: `opacity 300ms, transform 300ms`,
    },

    pageExit: {
      opacity: 1,
      transform: `scale(1)`,
    },
    pageExitSctive: {
      opacity: 0,
      transform: `scale(0.9)`,
      transition: `opacity 300ms, transform 300ms`,
    },
  })
)

export default pagesStyles
