import React from 'react'

export default function AddExtraKeysetForm(props) {
    return (
        <div classNameName="addKeebForm">
            <div className="card addKeeb">
                <h5 className="card-header" style={{ backgroundColor: "lightsteelblue", color: "midnightblue" }}><strong>Add Extra Keyset!</strong></h5>
                <div className="card-body" style={{ backgroundColor: "honeydew" }}>
                    <form onSubmit={props.handleFormSubmit}>
                        <div className="form-group">
                            <input
                                onChange={props.handleInputChange}
                                value={props.keyset}
                                name='keyset'
                                type="text"
                                className="form-control"
                                placeholder="Keyset"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={props.handleInputChange}
                                value={props.kits}
                                name='kits'
                                type="text"
                                className="form-control"
                                placeholder="Kits"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={props.handleInputChange}
                                value={props.type}
                                name='type'
                                type="text"
                                className="form-control"
                                placeholder="Type"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={props.handleInputChange}
                                value={props.material}
                                name='material'
                                type="text"
                                className="form-control"
                                placeholder="Material"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={props.handleInputChange}
                                value={props.profile}
                                name='profile'
                                type="text"
                                className="form-control"
                                placeholder="Profile"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type='submit'
                                className="addKeebBtn btn btn-primary"
                                value="Add Keeb"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
