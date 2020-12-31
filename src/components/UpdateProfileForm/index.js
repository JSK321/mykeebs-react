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
                    Update Profile
            </h5>
                <div className="card-body" style={{ backgroundColor: "honeydew" }}>
                    <form onSubmit={props.handleFormSubmit}>
                        {/* Image Preview */}
                        {props.loading ? (
                            <h3 style={{ color: "midnightblue" }}><strong>Loading Image...</strong></h3>
                        ) :
                            (
                                <img src={props.keebImage ? (props.keebImage) : null} style={props.keebImage ? ({ maxWidth: '100%', height: 'auto', maxHeight: "300px", marginBottom: '12px' }) : null} />
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
                            <input type="submit" className="addKeebBtn btn btn-primary" value="Submit" />
                        </div>
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
                    </form>
                </div>
            </div>
        </div>
    )
}
