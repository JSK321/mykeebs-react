import React from 'react'
import './styles.css'

export default function KeebCard(props) {
    return (
        <div className="KeebCard">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover')">
                <div className="flipper">
                    <div className="card">
                        <div className="front">
                            <img src="https://i.imgur.com/OVqaz9t.jpg" className="card-img-top" alt="Keeb Pic" />
                            <div className="card-body">
                                <h5 className="card-title">{props.maker} {props.name}</h5>
                                <ul className="list-group" style={{ listStyleType: "none" }}>
                                    <li className="list-group-item"><strong>Keeb Size:</strong> {props.size}%</li>
                                    <li className="list-group-item"><strong>Case:</strong> {props.case}</li>
                                    <li className="list-group-item"><strong>Color:</strong> {props.color}</li>
                                    <li className="list-group-item"><strong>Plate:</strong> {props.plate}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="back">
                            <ul className="list-group">
                                <li className="list-group-item"><strong>Switches:</strong> {props.switches}</li>
                                <li className="list-group-item"><strong>Spring Weight:</strong> {props.springWeight}</li>
                                <li className="list-group-item"><strong>Spring Lube:</strong> {props.springLube}</li>
                                <li className="list-group-item"><strong>Switch Film:</strong> {props.switchFilm}</li>
                                <li className="list-group-item"><strong>Stabilizers:</strong> {props.stabs}</li>
                                <li className="list-group-item"><strong>Stabilzers Lube:</strong> {props.stabLube}</li>
                                <li className="list-group-item"><strong>Keyset:</strong> {props.keyset}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}