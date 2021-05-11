import { render, screen } from "../../testUtils"
import Fallback from "./Fallback"

describe("<Fallback />", () => {
  test("should render Fallback", () => {
    render(<Fallback />)
    const { getByRole } = screen
    const progressbar = getByRole("progressbar")
    expect(progressbar).toBeInTheDocument()
  })
})
