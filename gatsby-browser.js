import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import "normalize.css"
const GlobalStyle = createGlobalStyle`

body, html {
  font-family: ${props => props.theme.fonts.main};
}
`
//wrapRootElement is part of Gatsby's' brsower & SSR API
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
