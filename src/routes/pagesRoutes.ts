import { lazy } from "react"

const Home = lazy(() => import("../pages/Home/Home"))
const Projects = lazy(() => import("../pages/Projects/Projects"))
const About = lazy(() => import("../pages/About/About"))
const Contact = lazy(() => import("../pages/Contact/Contact"))

const pagesRoutes = [
  { path: "/home", Component: Home },
  { path: "/projects", Component: Projects },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { redirect: true, path: "/", pathTo: "/home" },
]

export default pagesRoutes
