import React from 'react'

export default function AddKeebForm() {
    return (
        <div classNameName="addKeebForm">
            <div className="card addKeeb">
                <h5 className="card-header">Add Keeb Parts!</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <input onChange value name='name' type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input onChange value name='name' type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input onChange value name='maker' type="text" className="form-control" placeholder="Maker" />
                        </div>
                        <div className="form-group">
                            <input onChange value name='case' type="text" className="form-control" placeholder="Case" />
                        </div>
                        <div className="form-group">
                            <input onChange value name='color' type="text" className="form-control" placeholder="Color" />
                        </div>
                        <div className="form-group">
                            <input onChange value name='plate' type="text" className="form-control" placeholder="Plate" />
                        </div>
                        <div className="form-group">
                            <input type='submit' className="addKeebBtn btn btn-primary" value="Add Keeb" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
