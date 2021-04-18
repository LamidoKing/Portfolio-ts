import React from "react"
import { render, screen } from "./testUtils"
import App from "./App"

test("renders <App />", () => {
  render(<App />, { route: "/home" })
  const linkElement = screen.getByText(/Mode/i)
  expect(linkElement).toBeInTheDocument()
})
