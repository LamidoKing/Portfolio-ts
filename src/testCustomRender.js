/* eslint-disable react/prop-types */
import React from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
// import { ThemeProvider } from "@material-ui/styles"
// import theme from "styles/theme/theme"

const Wrapper = ({ children }) => {
  return <MemoryRouter>{children}</MemoryRouter>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
