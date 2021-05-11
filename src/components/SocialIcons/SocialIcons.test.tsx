import { render, screen } from "../../testUtils"
import SocialIcons from "./SocialIcons"
import { icons } from "../../variables"

describe("<SocialIcons />", () => {
  beforeEach(() => {
    render(<SocialIcons icons={icons} />)
  })

  test("should render SociaIcons ", () => {
    const { getByRole } = screen
    const presentation = getByRole("presentation")
    expect(presentation).toBeInTheDocument()
  })

  test("should show SociaIcons button ", () => {
    const { getByRole } = screen
    const SocialIconsButton = getByRole("button", { name: "social icons" })
    expect(SocialIconsButton).toBeInTheDocument()
  })

  test("should render with  SociaIcons menu ", () => {
    const { getByRole } = screen
    const menu = getByRole("menu")
    expect(menu).toBeInTheDocument()
  })

  icons.forEach(({ name }) => {
    test(`should render with ${name} as menuItem`, () => {
      const { getByRole } = screen
      const menu = getByRole("menuitem", { name })
      expect(menu).toBeInTheDocument()
    })
  })
})
