import React from 'react'

export default function NAvBar(props) {
    return (
        <div className="NavBar">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                </li>
                <li className="nav-item">
                    <button type="button" className="btn btn-primary logInBtn" data-toggle="modal" data-target="#logInModal">
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
                                <div className="modal-body" style={{display:"inline-blick", marginLeft:"auto", marginRight:"auto", textAlign:"center"}}>
                                    <form onSubmit={props.handleFormSubmit}>
                                        <input onChange={props.handleInputChange} value={props.email} type='text' name='email' placeholder='Email' />
                                        <br></br>
                                        <input onChange={props.handleInputChange} value={props.password} type='password' name='password' placeholder='Password' />
                                        <br></br>
                                        <input type='submit' className="btn btn-primary"  value="Log In" style={{width:"185px"}}/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
