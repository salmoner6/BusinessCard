import React from "react"
import GitHub from "../images/GitHub.png"

export default function Footer() {
    return (
        <div className="Footer">
            <a target="_blank" href="https://www.github.com/salmoner6">
                <img src={GitHub}></img>
            </a>
        </div>
    )
}