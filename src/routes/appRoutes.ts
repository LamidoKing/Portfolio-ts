import { lazy } from "react"

const PagesLayout = lazy(() => import("../layout/Pages"))
const appRoutes = [{ path: "/", Component: PagesLayout }]

export default appRoutes
