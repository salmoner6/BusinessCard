import React from "react"
import Age from "./Age"

const Info = ({img, name, age, job, email, pdf}) => {
    return (
        <div className="Info">
            <img src={img}></img>
            <h1 className="Info--Name">{name}</h1>
            <Age age={age}/>
            <h3 className="Info--Job">{job}</h3>
            <div className="Info--Buttons">
                <a href={`mailto:${email}`} className="Email"><i className="fa fa-envelope"></i>Email</a>
                <a href={pdf} target="_blank" className="CV"><i className="fa fa-download"></i>CV</a> 
            </div>

        </div>
    )
}

export default Info;