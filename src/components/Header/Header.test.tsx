import { render, screen } from "../../testUtils"
import Header from "./Header"

describe("<Header />", () => {
  beforeEach(() => {
    const toggleDrawer = jest.fn()
    const open = {
      drawer: false,
      mobile: false,
      mouseOpen: false,
    }
    render(<Header open={open} toggleDrawer={toggleDrawer} />)
  })

  test("should show open sidebar", () => {
    const { getByRole } = screen
    const openSidebar = getByRole("button", { name: "open sidebar" })
    expect(openSidebar).toBeInTheDocument()
  })

  test("should show open mobile sidebar button", () => {
    const { getByRole } = screen
    const openMobileSidebar = getByRole("button", {
      name: "open mobile sidebar",
    })
    expect(openMobileSidebar).toBeInTheDocument()
  })

  test("should show logo", () => {
    const { getByRole } = screen
    const logo = getByRole("img", {
      name: "logo",
    })
    expect(logo).toBeInTheDocument()
  })

  test("should show socialicons actions button", () => {
    const { getByRole } = screen
    const socialicons = getByRole("button", {
      name: "social icons",
    })
    expect(socialicons).toBeInTheDocument()
  })

  test("should show theme changer button", () => {
    const { getByRole } = screen
    const themeThanger = getByRole("checkbox", {
      name: "theme changer",
    })
    expect(themeThanger).toBeInTheDocument()
  })
})
