import { useState } from "react"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch"
import LightIcon from "@material-ui/icons/WbSunny"
import DarkIcon from "@material-ui/icons/NightsStay"
import { useTheme } from "../../hooks"
import { currentTheme } from "../../theme/themeStore"
import themeChangerStyles from "../../styles/components/themeChangerStyles"

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  icon: string
  focusVisible?: string
}

interface Props extends SwitchProps {
  classes: Styles
}

const ThemeChanger = themeChangerStyles(({ classes }: Props) => {
  const changeTheme = useTheme()
  const [checked, setChecked] = useState(currentTheme === "darkTheme")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    changeTheme(checked ? "lightTheme" : "darkTheme")
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
              root: classes.root,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}
            icon={<LightIcon className={classes.icon} />}
            checkedIcon={<DarkIcon />}
            checked={checked}
            onChange={handleChange}
            name="checked"
          />
        }
        label={`${checked ? "Dark" : "Light"} Mode`}
      />
    </FormGroup>
  )
})

export default ThemeChanger
