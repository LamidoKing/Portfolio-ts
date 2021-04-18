import { Typography } from "@material-ui/core"
import { ThemeChanger } from "../components"

const Home = () => {
  return (
    <div>
      <ThemeChanger />
      <Typography variant="h1" color="secondary">
        Home
      </Typography>
    </div>
  )
}

export default Home
