import { ThemeProvide } from "styled-components"
import Theme from "./src/themes/theme"
import React from "react"
export const mainWrapper = el => <ThemeProvide theme={Theme}>{el}</ThemeProvide>
