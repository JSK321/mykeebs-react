import React from 'react'

export default function UpdateProfileForm(props) {
    return (
        <div className="updateProfileForm">
            <div className="card addKeeb">
                <h5
                    className="card-header"
                    style={{
                        backgroundColor: "lightsteelblue",
                        color: "midnightblue"
                    }}>
                    <strong>Update Profile</strong>
                </h5>
                <div className="card-body" style={{ backgroundColor: "honeydew" }}>
                    <form onSubmit={props.handleFormSubmit}>
                        {/* Image Preview */}
                        {props.loading ? (
                            <h3 style={{ color: "midnightblue" }}><strong>Loading Image...</strong></h3>
                        ) :
                            (
                                <img src={props.profileImage ? (props.profileImage) : null} style={props.profileImage ? ({ maxWidth: '100%', height: 'auto', maxHeight: "300px", marginBottom: '12px' }) : null} />
                            )}
                        <div className="form-group">
                            <input
                                onChange={props.handleInputChange}
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder={props.name !== "" ? props.name : "Name"}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={props.handleInputChange}
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder={props.email !== "" ? props.email : "Email"}
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
                            />
                            <small id="passwordHelpBlock" className="form-text text-muted">
                                Password must be at least 8 characters.
                            </small>
                        </div>
                        <div>
                            <input type="submit" className="addKeebBtn btn btn-primary" value="Update Profile" />
                        </div>
                    </form>
                    {/* Upload Image Button */}
                    <input
                        type="button"
                        id="loadFileXml"
                        value="Upload Image"
                        onClick={props.handleImageUploadBtn}
                        className="fileInput btn btn-primary"
                    />
                    <input
                        type="file" onChange={props.handleUploadImage}
                        style={{ display: "none", }}
                        id="image"
                        name="profileImage" />
                    {/* Delete Button */}
                    <input
                        className="fileInput btn btn-primary"
                        onClick={props.handleDeleteProfile}
                        type="submit"
                        value="Delete Profile">
                    </input>
                </div>
            </div>
        </div>
    )
}
