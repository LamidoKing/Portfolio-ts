import { render } from "../../testUtils"
import Sidebar from "./Sidebar"

describe("<Sidebar />", () => {
  test("should render Sidebar ", async () => {
    const toggleDrawer = jest.fn()
    const open = {
      drawer: false,
      mobile: false,
      mouseOpen: false,
    }
    render(<Sidebar open={open} toggleDrawer={toggleDrawer} />)
  })
})
