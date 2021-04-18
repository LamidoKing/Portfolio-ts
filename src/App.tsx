import { Route, Switch } from "react-router-dom"
import indexRoutes from "./routes"

const App = () => {
  return (
    <Switch>
      {indexRoutes.map((page) => (
        <Route path={page.path} component={page.component} key={page.path} />
      ))}
    </Switch>
  )
}

export default App
