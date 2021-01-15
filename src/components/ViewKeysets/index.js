import React from 'react'
import { Link } from "react-router-dom";

export default function ViewKeysets(props) {
    return (
        <div className="ViewKeysets">
        <ul class="list-group">
            <li className="list-group-item" style={{marginBottom:"10px", textAlign:"center"}}>
                <Link to={`/keyset/${props.id}`} style={{color:"midnightblue"}}>
                    <strong>View: {props.type} {props.keyset}</strong>
                </Link>
            </li>
        </ul>
    </div>
    )
}