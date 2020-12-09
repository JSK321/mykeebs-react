import React from 'react'
import './styles.css'

export default function KeebUpdateCard(props) {
    return (
        <div className="KeebUpdateCard">
            <div className="card">
                <h5 className="card-title">Update Keeb Specs</h5>
                <form onSubmit={props.handleFormSubmit}>
                    <img src="https://i.imgur.com/OVqaz9t.jpg" className="card-img-top" alt="Keeb Pic" />
                    <div className="form-row">
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text">{props.color}</label>
                            <input className="updateKeebInput" onChange={props.handleKeebInputChange} type="text" name="color" placeholder="Color"></input>

                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text">{props.plate}</label>
                            <input className="updateKeebInput" onChange={props.handleKeebInputChange} type="text" name="plate" placeholder="Plate"></input>

                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text">{props.switches}</label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="switches" placeholder="Switches"></input>

                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text">{props.switchLube}</label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="switchLube" placeholder="Switch Lube"></input>
                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text">{props.springWeight}g</label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="number" name="springWeight" placeholder="Spring Weight"></input>
                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text">{props.springLube}</label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="springLube" placeholder="Spring Lube"></input>
                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text">{props.switchFilm}</label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="switchFilm" placeholder="Switch Film"></input>
                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text">{props.stabs}</label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="stabs" placeholder="Stabilizers"></input>
                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text">{props.stabLube}</label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="stabLube" placeholder="Stabilizers Lube"></input>
                        </div>
                        <div className="col-6 p-1">
                            <label className="input-group-prepend input-group-text">{props.keyset}</label>
                            <input className="updateKeebInput" onChange={props.handlePartsInputChange} type="text" name="keyset" placeholder="Keyset"></input>
                        </div>
                        <div className="col-12">
                            <input className="list-group-item list-group-item-action active" type="submit" value="Update Keeb"></input>
                        </div>
                    </div>
                </form>
                <input className="list-group-item list-group-item-action active deleteBtn" onClick={props.handleDeleteKeeb} type="submit" value="Delete Keeb"></input>
            </div>
        </div >
    )
}