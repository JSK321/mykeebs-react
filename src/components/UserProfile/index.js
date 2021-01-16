import React from 'react'
import { Link } from "react-router-dom";
import './styles.css'

export default function UserProfile(props) {
    return (
        <div className="UserProfile">
            <div className="card profileCard" style={{ maxWidth: "540px" }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img 
                        src={props.profileImage ? props.profileImage : null} 
                        style={{ width: "100%", height:"auto"}}
                        
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <ul class="list-group">
                                <h5 class="card-title" style={{ textAlign: "center", color: "midnightblue" }}><strong>Profile Information</strong></h5>
                                <li class="list-group-item"><strong>Name:</strong> {props.name}</li>
                                <li class="list-group-item"><strong>Email:</strong> {props.email}</li>
                                <li class="list-group-item" style={{ textAlign: "center", }}><strong><Link to={`/updateprofile`} style={{ color: "midnightblue" }}>Update Profile</Link></strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
