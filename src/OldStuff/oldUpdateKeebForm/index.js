import React from 'react'
import './styles.css'

export default function KeebUpdateCard(props) {
    return (
        <div class="updateCard card mb-3" style={{ maxWidth: "600px", margin: "0 auto", marginTop: "15px", backgroundColor: "honeydew" }}>
            <h5 className="card-title" style={{ backgroundColor: "lightsteelblue", color: "midnightblue", textAlign: "center", marginBottom: "0px" }}><strong>Update {props.maker} {props.name}</strong></h5>
            {/* Image Preview */}
            {props.loading ? (
                <h3 style={{ color: "midnightblue" }}><strong>Loading Image...</strong></h3>
            ) :
                (
                    <img src={props.keebImage ? (props.keebImage) : null} style={props.keebImage ? ({ maxWidth: '300px', height: 'auto', margin: '0 auto' }) : null} />
                )}
            <form onSubmit={props.handleFormSubmit}>
                <div class="row no-gutters">
                    <div class="col-sm-6">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.color}</strong></label>
                            <input className="updateKeebInput" onChange={props.handleKeebInputChange} type="text" name="color" placeholder="Color" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.plate}</strong></label>
                            <input className="updateKeebInput" onChange={props.handleKeebInputChange} type="text" name="plate" placeholder="Plate" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.switches}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="switches" placeholder="Switches" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.switchLube}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="switchLube" placeholder="Switch Lube" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.springWeight}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="springWeight" placeholder="Spring Weight" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.springLube}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="springLube" placeholder="Spring Lube" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.switchFilm}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="switchFilm" placeholder="Switch Film" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.stabs}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="stabs" placeholder="Stabilizers" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.stabLube}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="stabLube" placeholder="Stabilizers Lube" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <label className="inputLabel"><strong>{props.keyset}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="keyset" placeholder="Keyset" />
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="card">
                            <input className="fileInput btn btn-primary" type="submit" value="Update Keeb" />
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
                type="file" onChange={props.handleUploadImage}
                style={{ display: "none", }}
                id="image"
                name="keebImage" />
            {/* Delete Button */}
            <input
                className="fileInput btn btn-primary"
                onClick={props.handleDeleteKeeb}
                type="submit"
                value="Delete Keeb">
            </input>
        </div>
    )
}