import List from "@material-ui/core/List"
import { SvgIconProps } from "@material-ui/core"
import { ReactElement } from "react"
import ListItemLink from "./ListItemLink"

export interface ListLinkProps {
  links: {
    name: string
    path: string
    icon?: (props: SvgIconProps) => ReactElement
  }[]
}

const ListLink = (props: ListLinkProps) => {
  const { links } = props
  return (
    <List aria-label="routes links list">
      {links.map((link) => (
        <ListItemLink
          to={link.path}
          primary={link.name}
          icon={link.icon && <link.icon />}
          key={link.name}
        />
      ))}
    </List>
  )
}

export default ListLink
