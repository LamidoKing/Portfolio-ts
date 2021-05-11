import { Link, LinkProps } from "react-router-dom"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Omit } from "@material-ui/core"
import { forwardRef, useMemo } from "react"

export interface ListItemLinkProps {
  icon?: React.ReactElement
  primary: string
  to: string
}

const ListItemLink = (props: ListItemLinkProps) => {
  const { icon, primary, to } = props

  const CustomLink = useMemo(
    () =>
      forwardRef<any, Omit<LinkProps, "to">>((itemProps, ref) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <li>
      <ListItem button component={CustomLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

export default ListItemLink
