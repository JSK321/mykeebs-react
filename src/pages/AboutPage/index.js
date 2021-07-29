// React
import React from 'react'
// CSS
import './styles.css'

export default function AboutPage() {

    return (
        <div className="content">
            <div className="aboutPage">
                <img
                    src="https://i.imgur.com/4YstaXR.jpg"
                    alt="keeb pic"
                    className="aboutImage"
                />
                <div className="aboutPageInfo">
                    <h1 className="aboutTitle">Hello!</h1>
                    <ul>
                        <li>This is a personal website to showcase my collection of custom mechanical keyboards.</li>
                        <br></br>
                        <li>Keebs is a term used for keyboards, I enjoy the unique sound and the typing sensation of keebs.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
