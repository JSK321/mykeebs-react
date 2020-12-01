import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <nav className="navbar" style={{ backgroundColor: "black" }}>
            <ul className="nav" >
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add... 
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/addkeebform" className="dropdown-item" >Add Keeb</Link>
                        <Link to="/addpartsform" className="dropdown-item" >Add Parts</Link>
                    </div>
                </li>
            </ul>
            <ul className="nav">
                <li className="nav-item">
                    <button className="btn btn-link logInBtn" data-toggle="modal" data-target="#logInModal">
                        Log In
                    </button>
                    <div className="modal fade" id="logInModal" tabindex="-1" aria-labelledby="logInModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Keeb Admin</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body" style={{ display: "inline-blick", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                                    <form onSubmit={props.handleFormSubmit}>
                                        <input onChange={props.handleInputChange} value={props.email} type='text' name='email' placeholder='Email' />
                                        <br></br>
                                        <input onChange={props.handleInputChange} value={props.password} type='password' name='password' placeholder='Password' />
                                        <br></br>
                                        <input type='submit' className="btn btn-primary" value="Log In" style={{ width: "185px" }} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
