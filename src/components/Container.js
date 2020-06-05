import React from "react"
import { ContainerWrapper } from "../elements"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      <Hero />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
