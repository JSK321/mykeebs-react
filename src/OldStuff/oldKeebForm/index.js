import React from 'react'
import './styles.css'

export default function AddKeebForm(props) {
    return (
        <div classNameName="addKeebForm">
            <div className="card addKeeb">
                <h5 className="card-header" style={{backgroundColor:"lightsteelblue", color:"midnightblue"}}><strong>Add New Keeb!</strong></h5>
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
                            <input onChange={props.handleInputChange} value={props.angle} name='angle' type="text" className="form-control" placeholder="Angle" required/>
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



// import React from 'react'

// export default function AddPartsForm(props) {
//     return (
//         <div className="addKeebForm">
//             <div className="card addKeeb">
//                 <h5 className="card-header" style={{backgroundColor:"lightsteelblue"}}><strong>Add Keeb Parts!</strong></h5>
//                 <div className="card-body" style={{backgroundColor:"honeydew"}}>
//                     <form onSubmit={props.handleFormSubmit}>
//                         <div className="form-group">
//                             <select className="form-control" onChange={props.handleSelectKeeb} value={props.keeb} required>
//                                 <option selected disabled value="">Select Keeb...</option>
//                                 {props.Keeb !== undefined ? (
//                                     props.Keeb.map(keebObj => <option key={keebObj.id}>{keebObj.name}</option>)
//                                 ) : null}
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <input onChange={props.handleInputChange} value={props.switches} name='switches' type="text" className="form-control" placeholder="Switch" required/>
//                         </div>
//                         <div className="form-group">
//                             <input onChange={props.handleInputChange} value={props.springWeight} name='springWeight' type="text" className="form-control" placeholder="Spring Weight" required/>
//                         </div>
//                         <div className="form-group">
//                             <input onChange={props.handleInputChange} value={props.springLube} name='springLube' type="text" className="form-control" placeholder="Spring Lube" />
//                         </div>
//                         <div className="form-group">
//                             <input onChange={props.handleInputChange} value={props.switchLube} name='switchLube' type="text" className="form-control" placeholder="Switch Lube" />
//                         </div>
//                         <div className="form-group">
//                             <input onChange={props.handleInputChange} value={props.switchFilm} name='switchFilm' type="text" className="form-control" placeholder="Switch Film" />
//                         </div>
//                         <div className="form-group">
//                             <input onChange={props.handleInputChange} value={props.stabs} name='stabs' type="text" className="form-control" placeholder="Stabilizers" required/>
//                         </div>
//                         <div className="form-group">
//                             <input onChange={props.handleInputChange} value={props.stabLube} name='stabLube' type="text" className="form-control" placeholder="Stabilizer Lube" />
//                         </div>
//                         <div className="form-group">
//                             <input onChange={props.handleInputChange} value={props.keyset} name='keyset' type="text" className="form-control" placeholder="Keyset" />
//                         </div>
//                         <div className="form-group">
//                             <input onClick={props.handleKeebId} type='submit' className="addKeebBtn btn btn-primary" value="Add Parts" />
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

