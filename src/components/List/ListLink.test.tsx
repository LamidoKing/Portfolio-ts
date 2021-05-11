import { render, screen, fireEvent } from "../../testUtils"
import ListLink from "./ListLink"
import { sidebarLinksRoutes as linksRoutes } from "../../routes"

describe("<ListLink />", () => {
  beforeEach(() => {
    render(<ListLink links={linksRoutes} />)
  })

  test("should show list ul", () => {
    const { getByRole } = screen
    const list = getByRole("list", { name: "routes links list" })
    expect(list).toBeInTheDocument()
  })

  test("should show listitem li", () => {
    const { getAllByRole } = screen
    const list = getAllByRole("listitem", { name: "" })
    expect(list).toHaveLength(linksRoutes.length)
  })

  //   test("should render listitem as link to route", () => {
  //     const { getByRole } = screen

  //     linksRoutes.forEach((route) => {
  //       const link = getByRole("button", { name: route.name })
  //       expect(link).toHaveAttribute("href", route.path)
  //       fireEvent.click(link)
  //       expect(window.location.pathname).toBe(route.path)
  //     })
  //   })

  linksRoutes.forEach((route) => {
    test(`should render ${route.name} as link to route`, () => {
      const { getByRole } = screen
      const link = getByRole("button", { name: route.name })
      expect(link).toHaveAttribute("href", route.path)
      fireEvent.click(link)
      expect(window.location.pathname).toBe(route.path)
    })
  })
})
