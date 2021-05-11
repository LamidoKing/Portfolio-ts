import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { Icon } from "../components/SocialIcons/SocialIcons"

const icons: Icon[] = [
  {
    icon: <GitHubIcon />,
    name: "github",
    link: "https://github.com/LamidoKing",
  },
  {
    icon: <LinkedInIcon />,
    name: "linkedin",
    link: "https://www.linkedin.com/in/lamido",
  },
]

// eslint-disable-next-line import/prefer-default-export
export { icons }
