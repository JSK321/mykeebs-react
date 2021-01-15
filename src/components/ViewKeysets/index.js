import React from 'react'

export default function ViewKeysets(props) {
    return (
        <div class="card" style={{width:"300px", marginBottom:"10px"}}>
            <div class="card-header">
                {props.type} {props.keyset}
            </div>
            <ul class="list-group">
                <li class="list-group-item">Kits: {props.kits}</li>
                <li class="list-group-item">Profile: {props.profile}</li>
            </ul>
        </div>
    )
}
