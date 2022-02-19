import React from "react"
import Headshot from "../images/Headshot.jpg"



export default function Info() {
    return (
        <div className="Info">
            <img src={Headshot}></img>
            <h1 className="Name">Erin Salmon</h1>
            <h3 className="Job">Masters Student</h3>
            <div className="Buttons">
                <a href="mailto:erinsalmon@protonmail.com" className="Email"><i className="fa fa-envelope"></i>Email</a>
                <a href="CV_ErinSalmon.pdf" download className="CV"><i className="fa fa-download"></i>CV</a> 
            </div>


        </div>
    )
}

