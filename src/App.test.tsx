import { render, waitFor } from "./testUtils"
import App from "./App"

describe("App and Routes", () => {
  test("should renders <App /> and redirect to home page", async () => {
    await waitFor(() => render(<App />, { route: "/" }))
    expect(window.location.pathname).toBe("/home")
  })

  test("should renders <App /> and route to projects page", async () => {
    await waitFor(() => render(<App />, { route: "/projects" }))
    expect(window.location.pathname).toBe("/projects")
  })

  test("should renders <App /> and route to about page", async () => {
    await waitFor(() => render(<App />, { route: "/about" }))
    expect(window.location.pathname).toBe("/about")
  })

  test("should renders <App /> and route to contact page", async () => {
    await waitFor(() => render(<App />, { route: "/contact" }))
    expect(window.location.pathname).toBe("/contact")
  })
})
