import clsx from "clsx"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import { LayoutInterface } from "../../types/layoutInterface"
import SidebarLinks from "./SidebarLinks"
import sidebarStyles from "../../styles/components/sidebarStyles"

export interface SidebarProps extends LayoutInterface {}

const Sidebar = (props: SidebarProps) => {
  const classes = sidebarStyles()
  const { open, toggleDrawer } = props

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  return (
    <>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open.drawer,
            [classes.drawerClose]: !open.drawer,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open.drawer,
              [classes.drawerClose]: !open.drawer,
              [classes.drawerOnHover]: open.mouseOpen && !open.drawer,
            }),
          }}
          onMouseOver={() => toggleDrawer("mouseOpen", true)}
          onMouseOut={() => toggleDrawer("mouseOpen", false)}
        >
          <SidebarLinks />
        </Drawer>
      </Hidden>
      <Hidden mdUp implementation="css">
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          anchor="left"
          open={open.mobile}
          onClose={() => toggleDrawer("mobile", false)}
          onOpen={() => toggleDrawer("mobile", true)}
          classes={{
            paper: classes.mobileDrawer,
          }}
        >
          <SidebarLinks />
        </SwipeableDrawer>
      </Hidden>
    </>
  )
}

export default Sidebar
