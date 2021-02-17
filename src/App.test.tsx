import React from "react"
import { render, screen } from "./testCustomRender"
import App from "./App"

test("renders <App />", () => {
  render(<App />)
  const linkElement = screen.getByText(/Hello/i)
  expect(linkElement).toBeInTheDocument()
})
