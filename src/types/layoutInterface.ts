export interface IOpen {
  drawer: boolean
  mouseOpen: boolean
  mobile: boolean
}

export interface ToggleDrawer {
  toggleDrawer: (type: keyof IOpen, value: boolean) => void
}

export interface LayoutInterface {
  open: IOpen
  toggleDrawer: ToggleDrawer["toggleDrawer"]
}
