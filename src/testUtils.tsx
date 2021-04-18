/* eslint-disable react/prop-types */
import { FC, ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ThemeProvider from "./theme/ThemeProvider"

const Wrapper: FC = ({ children }) => {
  return (
    <MemoryRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </MemoryRouter>
  )
}

const customRender = (
  ui: ReactElement,
  { route = "/" } = {},
  options?: Omit<RenderOptions, "queries">
) => {
  window.history.pushState({}, "Test page", route)
  return render(ui, { wrapper: Wrapper, ...options })
}

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
