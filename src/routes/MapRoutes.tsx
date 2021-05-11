import { ComponentType, Suspense } from "react"
import {
  Route as ReactRoute,
  Redirect,
  Switch,
  RouteComponentProps,
} from "react-router-dom"
import Fallback from "../components/Fallback/Fallback"

interface MapRoutesProps {
  routes: {
    path: string
    pathTo?: string | any
    redirect?: boolean
    Component?: ComponentType<RouteComponentProps<any>> | ComponentType<any>
  }[]
}

const MapRoutes = (props: MapRoutesProps) => {
  const { routes } = props

  return (
    <Suspense fallback={<Fallback />}>
      <Switch>
        {routes.map((route) => {
          if (route.redirect === true)
            return (
              <Redirect path={route.path} to={route.pathTo} key={route.path} />
            )
          return (
            <ReactRoute
              path={route.path}
              key={route.path}
              component={route.Component}
            />
          )
        })}
      </Switch>
    </Suspense>
  )
}

export default MapRoutes
