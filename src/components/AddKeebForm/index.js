import React from 'react'
import './styles.css'

export default function AddKeebForm(props) {
    return (
        <div classNameName="addKeebForm">
            <div className="card addKeeb">
                <h5 className="card-header" style={{backgroundColor:"lightsteelblue", color:"midnightblue"}}>Add New Keeb!</h5>
                <div className="card-body" style={{backgroundColor:"honeydew"}}>
                    <form onSubmit={props.handleFormSubmit}>
                        <div className="form-group">
                            <input onChange={props.handleInputChange} value={props.name} name='name' type="text" className="form-control" placeholder="Name" required/>
                        </div>
                        <div className="form-group">
                            <select className="form-control" onChange={props.handleSelectSize} value={props.size} required>
                                <option selected disabled value="">Select Keeb Size...</option>
                                <option>100</option>
                                <option>96</option>
                                <option>80</option>
                                <option>75</option>
                                <option>65</option>
                                <option>60</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input onChange={props.handleInputChange} value={props.maker} name='maker' type="text" className="form-control" placeholder="Maker" required/>
                        </div>
                        <div className="form-group">
                            <input onChange={props.handleInputChange} value={props.case} name='case' type="text" className="form-control" placeholder="Case" required/>
                        </div>
                        <div className="form-group">
                            <input onChange={props.handleInputChange} value={props.color} name='color' type="text" className="form-control" placeholder="Color" required/>
                        </div>
                        <div className="form-group">
                            <input onChange={props.handleInputChange} value={props.plate} name='plate' type="text" className="form-control" placeholder="Plate" required/>
                        </div>
                        <div className="form-group">
                        <input type='submit' className="addKeebBtn btn btn-primary"  value="Add Keeb"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
