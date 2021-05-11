import ListLink from "../List/ListLink"
import { sidebarLinksRoutes } from "../../routes"

const SidebarLinks = () => {
  return <ListLink links={sidebarLinksRoutes} />
}

export default SidebarLinks
