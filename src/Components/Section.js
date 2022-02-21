import React from "react"

const Section = ({ title, text}) => {
    return (
        <div className="Section">
            <h2 className="Section--title">{title}</h2>
            <p className="Section--text">{text}</p>
        </div>
    )
}

export default Section;