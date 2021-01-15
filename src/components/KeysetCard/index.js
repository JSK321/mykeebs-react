import React from 'react'
import { Link } from "react-router-dom";
import './styles.css'

export default function KeysetCard(props) {
    return (
        <div className="KeysetCard">
            <div className="card Keyset">
                <h5
                    className="card-header"
                    style={{ textAlign: "center", color: "midnightblue", backgroundColor: "lightsteelblue" }}
                >
                    <strong>{props.type} {props.keyset}</strong>
                </h5>
                <img
                    src={props.keysetImage}
                    style={{ width: "100%", height: "auto", maxHeight: "300px", display: "block", marginRight: "auto", marginLeft: "auto", }}
                />
                <div className="card-body">
                    <ul className="list-group" style={{ listStyleType: "none" }}>
                        <li className="list-group-item"><strong>Kits:</strong> {props.kits}</li>
                        <li className="list-group-item"><strong>Material:</strong> {props.material}</li>
                        <li className="list-group-item"><strong>Profile:</strong> {props.profile}</li>
                        <li
                            className="list-group-item"
                            style={{ textAlign: "center", }}
                        >
                            <strong>
                                <Link
                                    to={`/updatekeyset/${props.id}`}
                                    style={{ color: "midnightblue" }}
                                >
                                    Update Keyset
                                </Link>
                            </strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
