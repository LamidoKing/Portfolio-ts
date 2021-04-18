const setToken = (name: string, token: string): void => {
  localStorage.setItem(name, token)
}

const getToken = (name: string): string | null => {
  const token = localStorage.getItem(name)

  if (!token) {
    return null
  }

  return token
}

const loggedIn = (): boolean => {
  const token = getToken("TOKEN")
  return !!token
}

const logout = (): void => {
  localStorage.removeItem("TOKEN")
  localStorage.removeItem("USER")
}

export { loggedIn, setToken, getToken, logout }
