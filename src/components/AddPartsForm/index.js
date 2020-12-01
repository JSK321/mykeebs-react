import React from 'react'

export default function AddKeebForm(props) {
    return (
        <div className="addKeebForm">
            <div className="card addKeeb">
                <h5 className="card-header">Add Keeb Parts!</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                        <select className="form-control" onChange={props.handleSelectKeeb} value={props.keeb}>
                                <option>Select Keeb...</option>
                                {props.Keeb != undefined ? (
                                    props.Keeb.map(keebObj=><option>{keebObj.name}</option>)
                                ): null}
                            </select>
                        </div>
                        <div className="form-group">
                            <input onChange={props.handleInputChange} value={props.switches} name='switches' type="text" className="form-control" placeholder="Switch" />
                        </div>
                        <div className="form-group">
                            <input onChange={props.handleInputChange} value={props.springWeight} name='springWeight' type="number" className="form-control" placeholder="Spring Weight" />
                        </div>
                        <div className="form-group">
                            <input onChange={props.handleInputChange} value={props.switchLube} name='switchLube' type="text" className="form-control" placeholder="Switch Lube" />
                        </div>
                        <div className="form-group">
                            <input onChange={props.handleInputChange} value={props.switchFilm} name='switchFilm' type="text" className="form-control" placeholder="Switch Film" />
                        </div>
                        <div className="form-group">
                            <input onChange={props.handleInputChange} value={props.stabs} name='stabs' type="text" className="form-control" placeholder="Stabilizers" />
                        </div>
                        <div className="form-group">
                            <input onChange={props.handleInputChange} value={props.stabLube} name='stabLube' type="text" className="form-control" placeholder="Stabilizer Lube" />
                        </div>
                        <div className="form-group">
                            <input onChange={props.handleInputChange} value={props.keyset} name='keyset' type="text" className="form-control" placeholder="Keyset" />
                        </div>
                        <div className="form-group">
                            <input type='submit' className="addKeebBtn btn btn-primary" value="Add Parts" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
