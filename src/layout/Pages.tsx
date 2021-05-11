import { useState } from "react"
import { useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import CssBaseline from "@material-ui/core/CssBaseline"
import Sidebar from "../components/Sidebar/Sidebar"
import { IOpen } from "../types/layoutInterface"
import { MapRoutes, pagesRoutes } from "../routes"
import Header from "../components/Header/Header"
import pagesStyles from "../styles/layout/pagesStyles"

const Layout = () => {
  const classes = pagesStyles()
  const location = useLocation()
  const [open, setOpen] = useState<IOpen>({
    drawer: false,
    mouseOpen: false,
    mobile: false,
  })

  const toggleDrawer = (type: keyof IOpen, value: boolean) => {
    setOpen({ ...open, [type]: value })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} toggleDrawer={toggleDrawer} />
      <Sidebar open={open} toggleDrawer={toggleDrawer} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <TransitionGroup>
          <CSSTransition
            timeout={300}
            classNames={{
              enter: classes.pageEnter,
              enterActive: classes.pageEnterActive,
              exit: classes.pageExit,
              exitActive: classes.pageExitSctive,
            }}
            key={location.key}
            unmountOnExit
          >
            <MapRoutes routes={pagesRoutes} />
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  )
}

export default Layout
