import React from "react"

export default function Section(props) {
    return (
        <div className="Section">
            <h2 className="Section--title">{props.title}</h2>
            <p className="Section--text">{props.text}</p>
        </div>
    )
}