import React from "react"
import Headshot from "../images/Headshot.jpg"
import Pdf from "./CV_ErinSalmon.pdf"
import Age from "./Age"

export default function Info() {
    return (
        <div className="Info">
            <img src={Headshot}></img>
            <h1 className="Info--Name">Erin Salmon</h1>
            <Age age={28}/>
            <h3 className="Info--Job">Masters Student</h3>
            <div className="Info--Buttons">
                <a href="mailto:erinsalmon@protonmail.com" className="Email"><i className="fa fa-envelope"></i>Email</a>
                <a href={Pdf} target="_blank" className="CV"><i className="fa fa-download"></i>CV</a> 
            </div>

        </div>
    )
}

