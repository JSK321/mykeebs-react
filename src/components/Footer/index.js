// React
import React from 'react'
// CSS
import './styles.css'

export default function Footer() {
    return (
        <div className="footer">
            <p> Made with 💗</p>
            <a
                href="https://github.com/JSK321/mykeebs-react"
                target="_blank"
                className="githubLink"
            >
                Github
            </a>
            <a
                href="/about"
                className="githubLink"
            >
                About
            </a>
        </div>
    )
}
