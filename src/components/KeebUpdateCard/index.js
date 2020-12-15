import React from 'react'
import './styles.css'

export default function KeebUpdateCard(props) {
    return (
        <div className="KeebUpdateCard">
            <div className="card">
                <h5 className="card-title" style={{ backgroundColor: "lightsteelblue", color: "midnightblue" }}>Update Keeb Specs</h5>
                <form onSubmit={props.handleFormSubmit}>
                    {/* Image Preview */}
                    {props.loading ? (
                        <h3 style={{color:"midnightblue"}}>Loading Image...</h3>
                    ) :
                        (
                            <img src={props.keebImage ? (props.keebImage) : null} style={{ width: '300px' }} />
                        )}
                    {/* Update Form */}
                    <div className="form-row">
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text"><strong>{props.color}</strong></label>
                            <input className="updateKeebInput" onChange={props.handleKeebInputChange} type="text" name="color" placeholder="Color"></input>

                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text"><strong>{props.plate}</strong></label>
                            <input className="updateKeebInput" onChange={props.handleKeebInputChange} type="text" name="plate" placeholder="Plate"></input>

                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text"><strong>{props.switches}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="switches" placeholder="Switches"></input>

                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text"><strong>{props.switchLube}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="switchLube" placeholder="Switch Lube"></input>
                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text"><strong>{props.springWeight}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="springWeight" placeholder="Spring Weight"></input>
                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text"><strong>{props.springLube}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="springLube" placeholder="Spring Lube"></input>
                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text"><strong>{props.switchFilm}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="switchFilm" placeholder="Switch Film"></input>
                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text"><strong>{props.stabs}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="stabs" placeholder="Stabilizers"></input>
                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text"><strong>{props.stabLube}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="stabLube" placeholder="Stabilizers Lube"></input>
                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text"><strong>{props.keyset}</strong></label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="keyset" placeholder="Keyset"></input>
                        </div>
                        <div className="col-12">
                            <input className="fileInput btn btn-primary" type="submit" value="Update Keeb"></input>
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
        </div >
    )
}