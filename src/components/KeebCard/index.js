import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function KeebCard(props) {
    return (
        <div className="KeebCard" style={{ marginBottom: "20px", marginLeft: "auto", marginRight: "auto" }}>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover')">
                <div className="flipper">
                    <div className="card">
                        <div className="front">
                            <img
                                src={props.keebImage}
                                style={{ width: "100%", height: "auto", maxHeight:"300px", display: "block", marginRight: "auto", marginLeft: "auto",}}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", color: "midnightblue" }}><strong>{props.maker} {props.name}</strong></h5>
                                <ul className="list-group" style={{ listStyleType: "none" }}>
                                    <li className="list-group-item"><strong>Keeb Size:</strong> {props.size}%</li>
                                    <li className="list-group-item"><strong>Angle:</strong> {props.angle}</li>
                                    <li className="list-group-item"><strong>Case:</strong> {props.case}</li>
                                    <li className="list-group-item"><strong>Color:</strong> {props.color}</li>
                                    <li className="list-group-item"><strong>Plate:</strong> {props.plate}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="back">
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item"><strong>Switches:</strong> {props.switches}</li>
                                    <li className="list-group-item"><strong>Switch Lube:</strong> {props.switchLube}</li>
                                    <li className="list-group-item"><strong>Switch Film:</strong> {props.switchFilm}</li>
                                    <li className="list-group-item"><strong>Spring Weight:</strong> {props.springWeight}</li>
                                    <li className="list-group-item"><strong>Spring Lube:</strong> {props.springLube}</li>
                                    <li className="list-group-item"><strong>Stabilizers:</strong> {props.stabs}</li>
                                    <li className="list-group-item"><strong>Stabilizers Lube:</strong> {props.stabLube}</li>
                                    <li className="list-group-item"><strong>Keyset:</strong> {props.keyset}</li>
                                    {/* Buttons */}
                                    {/* <li
                                        className="list-group-item"
                                        style={{ textAlign: "center" }}>
                                        <Link to='/' style={{ color: "midnightblue" }}>
                                            <strong>Sound Test</strong>
                                        </Link>
                                    </li> */}
                                    {/* {props.isLoggedIn ?
                                        <li
                                            className="list-group-item"
                                            style={{ textAlign: "center" }}>
                                            <Link to={`/updatekeeb/${props.id}`}>
                                                <strong style={{ color: "midnightblue" }}>
                                                    Update Keeb
                                                </strong>
                                            </Link>
                                        </li>
                                        :
                                        null} */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}