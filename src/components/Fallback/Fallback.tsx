import CircularProgress from "@material-ui/core/CircularProgress"
import fallbackStyles from "../../styles/components/fallbackStyles"

const Fallback = () => {
  const classes = fallbackStyles()
  return (
    <div className={classes.loading}>
      <CircularProgress color="inherit" />
    </div>
  )
}
export default Fallback
