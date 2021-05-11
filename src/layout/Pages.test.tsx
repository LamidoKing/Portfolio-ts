import { render, screen, fireEvent } from "../testUtils"
import Pages from "./Pages"

describe("<Pages />", () => {
  beforeEach(() => {
    render(<Pages />)
  })

  test("should open and close sidebar", () => {
    const { getByRole } = screen
    const openSidebar = getByRole("button", { name: "open sidebar" })
    expect(openSidebar).toBeInTheDocument()

    fireEvent.click(openSidebar)
    const closeSidebar = getByRole("button", { name: "close sidebar" })
    expect(closeSidebar).toBeInTheDocument()

    fireEvent.click(closeSidebar)
    expect(openSidebar).toBeInTheDocument()
  })
})
