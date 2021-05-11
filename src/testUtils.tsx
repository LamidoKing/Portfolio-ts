import { FC, ReactElement, ReactNode } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ThemeProvider from "./theme/ThemeProvider"

interface Props {
  children?: ReactNode
}

const defaultProps = {
  children: <></>,
}
const Wrapper: FC = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  )
}

Wrapper.defaultProps = defaultProps

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
