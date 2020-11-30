import React from 'react'

export default function KeebCard(props) {
    return (
        <div className="KeebCard">
            <div className="card" style={{width:"50vw", margin:"10px auto"}}>
                <img src="..." className="card-img-top" alt="Keeb Pic" />
                <div className="card-body">
                    <h5 className="card-title">{props.maker} {props.name}</h5>
                    <ul style={{listStyleType:"none"}}>
                        <li>Keeb Size: {props.size}%</li>
                        <li>Case: {props.case}</li>
                        <li>Color: {props.color}</li>
                        <li>Plate: {props.plate}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
