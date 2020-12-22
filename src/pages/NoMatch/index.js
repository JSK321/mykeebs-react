import React from 'react'
import './styles.css'

export default function NoMatch() {
    return (
        <div className="NoMatch">
            <div className="card"
             style={{
                backgroundColor: "honeydew",
                color: 'midnightblue',
                border: "2px solid slateblue",
                boxShadow: "5px 5px 5px mediumslateblue",
                textAlign: "center"
            }}
            >
                <div className="card-body">
                    <h4 className="card-title"><strong>Error 404: No page found.</strong></h4>
                    <img src="https://i.imgur.com/jMAUk7U.jpg?1" />
                </div>
            </div>
        </div>
    )
}
