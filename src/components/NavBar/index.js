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
                    // <li className="nav-item">
                    //     <Link className="nav-link" to="/addkeebform" style={{ color: "mintcream" }}>Add Keeb</Link>
                    // </li>
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" style={{ color: "mintcream" }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add...
                    </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: "honeydew" }}>
                            <Link to="/addkeebform" className="dropdown-item" style={{ color: "midnightblue" }}><strong>Keeb</strong></Link>
                            <Link to="/addextrakeysetform" className="dropdown-item" style={{ color: "midnightblue" }}><strong>Keyset</strong></Link>
                        </div>
                    </li>
                    :
                    <li className="nav-item">
                        <button className="btn btn-link logInBtn" data-toggle="modal" data-target="#logInModal" style={{ color: "mintcream" }}>
                            Log In
                        </button>
                        <div className="modal fade" id="logInModal" tabindex="-1" aria-labelledby="logInModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ backgroundColor: "honeydew" }}>
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel" style={{ color: "midnightblue" }}><strong>Keeb User</strong></h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body" style={{ display: "inline-block", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
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
                                                style={{ width: "188px", backgroundColor: "midnightblue" }}
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
                        <Link to="/profile"
                            className="nav-link"
                            style={{ color: "mintcream" }}>
                            Profile
                        </Link>
                    </li>
                    :
                    null
                }

                {props.isLoggedIn ?
                    <li>
                        <button
                            onClick={props.handleLogOut}
                            className="signOutBtn btn btn-link"
                            style={{ color: "mintcream" }}>
                            Log Out
                        </button>
                    </li>

                    :

                    <li>
                        <Link to='/register'
                            className="nav-link"
                            style={{ color: "mintcream" }}>
                            Register
                        </Link>
                    </li>
                }
            </ul>
        </nav>
    )
}
