import React from 'react'
import { Link } from "react-router-dom";

export default function ViewKeebs(props) {
    return (
        <div className="ViewKeebs">
            <ul class="list-group">
                <li className="list-group-item" style={{marginBottom:"10px", textAlign:"center"}}>
                    <Link to={`/updatekeeb/${props.id}`} style={{color:"midnightblue"}}>
                        <strong>Update: {props.maker} {props.name}</strong>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
