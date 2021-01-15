import React from 'react'
import { Link } from "react-router-dom";

export default function ViewKeysets(props) {
    return (
        <div className="ViewKeysets">
        <ul class="list-group">
            <li className="list-group-item" style={{marginBottom:"10px", textAlign:"center"}}>
                <Link to={`/updatekeyset/${props.id}`} style={{color:"midnightblue"}}>
                    <strong>View: {props.maker} {props.keyset}</strong>
                </Link>
            </li>
        </ul>
    </div>
    )
}


{/* <div class="card" style={{width:"300px", marginBottom:"10px"}}>
<div class="card-header">
    {props.type} {props.keyset}
</div>
<ul class="list-group">
    <li class="list-group-item">Kits: {props.kits}</li>
    <li class="list-group-item">Profile: {props.profile}</li>
</ul>
</div> */}