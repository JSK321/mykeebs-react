import React from 'react'

export default function KeysetUpdateCard(props) {
    return (
        <div class="updateCard card mb-3" style={{ maxWidth: "600px", margin: "0 auto", marginTop: "15px", backgroundColor: "honeydew" }}>
            <h5 className="card-title" style={{ backgroundColor: "lightsteelblue", color: "midnightblue", textAlign: "center", marginBottom: "0px" }}><strong>Update Keyset</strong></h5>
            {/* Image Preview */}
            {props.loading ? (
            <h3 style={{ color: "midnightblue", textAlign:"center"}}><strong>Loading Image...</strong></h3>
        ) :
            (
                <img src={props.keysetImage ? (props.keysetImage) : null} style={props.keysetImage ? ({ maxWidth: '100%', height: 'auto',}) : null} />
            )}
            <form onSubmit={props.handleFormSubmit}>
                <div class="row no-gutters">
                    <div class="col-sm-12">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.keyset}</strong></label>
                            <input className="updateKeebInput"
                                onChange={props.handleInputChange} 
                                type="text" name="keyset" placeholder="Keyset" />
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.kits}</strong></label>
                            <input className="updateKeebInput"
                                onChange={props.handleInputChange} 
                                type="text"
                                name="kits"
                                placeholder="Kits" />
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.material}</strong></label>
                            <input className="updateKeebInput"
                                onChange={props.handleInputChange}
                                type="text"
                                name="material"
                                placeholder="Material" />
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.type}</strong></label>
                            <input className="updateKeebInput"
                                onChange={props.handleInputChange}
                                type="text"
                                name="type"
                                placeholder="Type" />
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.profile}</strong></label>
                            <input className="updateKeebInput"
                                onChange={props.handleInputChange}
                                type="text"
                                name="profile"
                                placeholder="Profile" />
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="card">
                            <input className="fileInput btn btn-primary" type="submit" value="Update Keyset" />
                        </div>
                    </div>
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
                type="file" 
                onChange={props.handleUploadImage}
                style={{ display: "none", }}
                id="image"
                name="keebImage" />
            {/* Delete Button */}
            <input
                className="fileInput btn btn-primary"
                onClick={props.handleDeleteKeyset}
                type="submit"
                value="Delete Keyset">
            </input>
        </div>
    )
}
