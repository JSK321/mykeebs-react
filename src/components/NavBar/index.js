import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <nav className="navbar" style={{ backgroundColor: "midnightblue", }}>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/" style={{ color: "mintcream" }}>Home</Link>
                </li>
                {props.isLoggedIn ?
                    <li className="nav-item">
                        <Link className="nav-link" to="/addkeebform" style={{ color: "mintcream" }}>Add Keeb</Link>
                    </li>
                    // <li className="nav-item dropdown">
                    //     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    //         Add...
                    // </a>
                    //     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    //         <Link to="/addkeebform" className="dropdown-item" >Add Keeb</Link>
                    //         <Link to="/addpartsform" className="dropdown-item" >Add Parts</Link>
                    //     </div>
                    // </li>
                    :
                    <li className="nav-item">
                        <button className="btn btn-link logInBtn" data-toggle="modal" data-target="#logInModal" style={{ color: "mintcream" }}>
                            Log In
                        </button>
                        <div className="modal fade" id="logInModal" tabindex="-1" aria-labelledby="logInModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ backgroundColor: "honeydew" }}>
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel" style={{ color: "midnightblue" }}>Keeb Admin</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body" style={{ display: "inline-blick", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                                        <form onSubmit={props.handleFormSubmit}>
                                            <input
                                                onChange={props.handleInputChange}
                                                value={props.email}
                                                type='text'
                                                name='email'
                                                placeholder='Email'
                                                style={{ backgroundColor: "honeydew", color: "midnightblue" }}
                                                required
                                            />
                                            <br></br>
                                            <input
                                                onChange={props.handleInputChange}
                                                value={props.password}
                                                type='password'
                                                name='password'
                                                placeholder='Password'
                                                style={{ backgroundColor: "honeydew", color: "midnightblue" }}
                                                required
                                            />
                                            <br></br>
                                            <input
                                                type='submit'
                                                className="btn btn-primary"
                                                value="Log In"
                                                style={{ width: "185px", backgroundColor: "midnightblue" }}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                }
            </ul>
            <ul className="nav">
                {props.isLoggedIn ?
                    <li>
                        <button
                            onClick={props.handleLogOut}
                            className="signOutBtn btn btn-link"
                            style={{ color: "mintcream" }}
                        >
                            Log Out
                        </button>
                    </li> :

                    null
                }
            </ul>
        </nav>
    )
}
