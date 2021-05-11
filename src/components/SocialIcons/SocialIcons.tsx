import clsx from "clsx"
import { useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import SpeedDial from "@material-ui/lab/SpeedDial"
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon"
import SpeedDialAction from "@material-ui/lab/SpeedDialAction"
import ShareIcon from "@material-ui/icons/Share"
import CloseIcon from "@material-ui/icons/Close"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import socialIconsStyles from "../../styles/components/socialIconsStyles"

export type Icon = {
  icon: JSX.Element
  name: "linkedin" | "github"
  link: string
}

interface SocialIconsProps {
  icons: Icon[]
}

const SocialIcons = (props: SocialIconsProps) => {
  const classes = socialIconsStyles()
  const { icons } = props
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const mobileScreen = useMediaQuery(theme.breakpoints.down("xs"))

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpenLinks = (link: string) => {
    const openWindow = window.open(link, "_blank", "noopener,noreferrer")
    if (openWindow) openWindow.opener = null
  }

  const capitalized = (string: string) =>
    `${string.charAt(0).toUpperCase()}${string.slice(1)}`

  return (
    <>
      <SpeedDial
        ariaLabel="social icons"
        className={clsx({
          [classes.speedDial]: !mobileScreen,
          [classes.speedDialMobile]: mobileScreen,
        })}
        icon={<SpeedDialIcon icon={<ShareIcon />} openIcon={<CloseIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={mobileScreen ? "up" : "left"}
        classes={{
          fab: classes.speedDialFab,
        }}
        FabProps={{ size: "medium" }}
      >
        {icons.map(({ name, link, icon }) => (
          <SpeedDialAction
            aria-label={name}
            tooltipPlacement="left"
            key={name}
            icon={icon}
            tooltipTitle={capitalized(name)}
            tooltipOpen={!!mobileScreen}
            classes={{
              staticTooltipLabel: classes.color,
              fab: clsx({
                [classes[name]]: name,
              }),
            }}
            FabProps={{ "aria-label": name }}
            onClick={() => handleOpenLinks(link)}
          />
        ))}
      </SpeedDial>
    </>
  )
}

export default SocialIcons
