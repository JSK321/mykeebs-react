import React from 'react'

export default function SignUpForm(props) {
    return (
        <div className="signUpForm">
            <div className="card addKeeb">
                <h5
                    className="card-header"
                    style={{
                        backgroundColor: "lightsteelblue",
                        color: "midnightblue"
                    }}>
                    Register
                </h5>
                <div className="card-body" style={{ backgroundColor: "honeydew" }}>
                    <form onSubmit={props.handleFormSubmit}>
                        <div className="form-group">
                            <input
                                onChange={props.handleInputChange}
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={props.handleInputChange}
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                aria-describedby="passwordHelpBlock"
                                required
                            />
                            <small id="passwordHelpBlock" className="form-text text-muted">
                                Password must be at least 8 characters long.
                        </small>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={props.handleInputChange}
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="addKeebBtn btn btn-primary" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
