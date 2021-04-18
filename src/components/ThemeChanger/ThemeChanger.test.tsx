import { render, screen, cleanup, fireEvent } from "../../testUtils"
import ThemeChanger from "./ThemeChanger"

describe("<ThemeChanger />", () => {
  afterEach(() => cleanup())

  beforeEach(() => render(<ThemeChanger />))

  it("should Render <themeChanger /> components correctly", () => {
    const { getByText } = screen

    expect(getByText(/Mode/i)).toBeInTheDocument()
  })

  it("should changer theme", () => {
    const { getByRole, getByLabelText } = screen
    const checkbox = getByRole("checkbox")

    expect(checkbox).toHaveProperty("checked", false)
    expect(getByLabelText(/Light Mode/i)).toBeInTheDocument()

    fireEvent.click(checkbox)

    expect(checkbox).toHaveProperty("checked", true)
    expect(getByLabelText(/Dark Mode/i)).toBeInTheDocument()
  })
})
