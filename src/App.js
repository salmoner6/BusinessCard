import React from "react"
import Info from "./Components/Info"
import Footer from "./Components/Footer"
import Section from "./Components/Section"

export default function App() {
  return (
    <div className="Container">
      <Info />
      <Section
        title="About"
        text="Originally trained as a teacher with degrees in 
            psychology and education. Transitioned to computer
            science and web development. Currently completing
            my Master's and looking to work in educational software 
            development."/>
      <Section
        title="Interests"
        text="Passionate about learning. Always up for an adventure.
            Love staying active, backcountry camping, hiking, 
            running, skiing, and board games."
        />
      <Footer />
    </div>
  )
}
