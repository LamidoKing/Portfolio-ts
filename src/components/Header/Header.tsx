import { useLocation } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Hidden from "@material-ui/core/Hidden"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import MoreVert from "@material-ui/icons/MoreVert"
import MenuIcon from "@material-ui/icons/Menu"
import { useTheme } from "../../hooks"
import { icons } from "../../variables"
import { LayoutInterface } from "../../types/layoutInterface"
import { sidebarLinksRoutes } from "../../routes"
import ElevationScroll from "./ElevationScroll"
import SocialIcons from "../SocialIcons/SocialIcons"
import ThemeChanger from "../ThemeChanger/ThemeChanger"
import styles from "../../styles/components/headerStyles"
import logoWhite from "../../assests/logoWhite.png"
import logoBlack from "../../assests/logoBlack.png"

interface HeaderProps extends LayoutInterface {}

const Header = (props: HeaderProps) => {
  const classes = styles()
  const { open, toggleDrawer } = props
  const { currentTheme } = useTheme()
  const logo = currentTheme === "darkTheme" ? logoBlack : logoWhite

  const location = useLocation()

  const getRouteName = (routes: typeof sidebarLinksRoutes) => {
    const route = routes.find((r) => r.path === location.pathname)
    return route?.name
  }

  return (
    <ElevationScroll>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.container}>
          <Hidden smDown implementation="css">
            <div>
              {open.drawer ? (
                <IconButton
                  color="inherit"
                  aria-label="close sidebar"
                  edge="start"
                  className={classes.sidebarMenuButton}
                  onClick={() => toggleDrawer("drawer", false)}
                >
                  <MoreVert />
                </IconButton>
              ) : (
                <IconButton
                  color="inherit"
                  aria-label="open sidebar"
                  edge="start"
                  className={classes.sidebarMenuButton}
                  onClick={() => toggleDrawer("drawer", true)}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </div>
          </Hidden>
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open mobile sidebar"
              edge="start"
              className={classes.sidebarMenuButton}
              onClick={() => toggleDrawer("mobile", true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div className={classes.flex}>
            <Button className={classes.title}>
              {getRouteName(sidebarLinksRoutes)}
            </Button>
          </div>
          <div className={classes.flex}>
            <Avatar src={logo} alt="logo" className={classes.logo} />
          </div>
          <SocialIcons icons={icons} />
          <ThemeChanger />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
