import React from "react"
import Info from "./Info"
import Section from "./Section"
import Footer from "./Footer"

const Person = ({img, name, age, job, email, pdf, about, interests}) => {
    return (
      <div className="Container">
        <Info 
            img={img}
            name={name}
            age={age}
            job={job}
            email={email}
            pdf={pdf}
        />
        <Section
          title="About" 
          text={about} />
        <Section
          title="Interests"
          text={interests}
          />
        <Footer />
      </div>
    )
  }
  
  export default Person;