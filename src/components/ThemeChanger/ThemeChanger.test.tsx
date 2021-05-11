import { render, screen, fireEvent } from "../../testUtils"
import ThemeChanger from "./ThemeChanger"

describe("<ThemeChanger />", () => {
  beforeEach(() => render(<ThemeChanger />))

  it("should Render <themeChanger /> components correctly", () => {
    const { getByRole } = screen

    const checkbox = getByRole("checkbox", { name: "theme changer" })

    expect(checkbox).toBeInTheDocument()
  })

  it("should changer theme", () => {
    const { getByRole } = screen
    const checkbox = getByRole("checkbox")

    expect(checkbox).toHaveProperty("checked", false)

    fireEvent.click(checkbox)

    expect(checkbox).toHaveProperty("checked", true)
  })
})
