import { memo, useState, Suspense } from 'react'
import { ThemeProvider } from "styled-components"
import { themeStyled } from "../Theme";

import 'i18n'

const Provider = ({children}) => {
  const [theme, setTheme] = useState("dark");
  const swapTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  window.swapTheme = swapTheme

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={{ ...themeStyled, theme }}>
        {children}
      </ThemeProvider>
    </Suspense>
  )
}

export default memo(Provider)