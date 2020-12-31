import React, { useState, useEffect } from 'react'
import UserProfile from '../../components/UserProfile'
import ViewKeebs from '../../components/ViewKeebs'
import API from '../../utils/API'

export default function Profile(props) {
    const [userProfile, setUserProfile] = useState({
        email: "",
        name: "",
        password: "",
        profileImage:"",
        id:""
    })

    useEffect(() => {
        const token = localStorage.getItem('token')
        API.getProfile(token).then(keebData => {
            if (keebData) {
                setUserProfile({
                    name: keebData.name,
                    email: keebData.email,
                    keebs: keebData.Keebs,
                    token: token,
                    id: keebData.id,
                    isLoggedIn: true
                })
            } else {
                localStorage.removeItem("token");
                setUserProfile({
                    name: "",
                    email: "",
                    keebs: [],
                    token: "",
                    id: "",
                    isLoggedIn: false
                })
            }
        })
    }, [])

    return (
        <div>
            <UserProfile
                name={userProfile.name}
                email={userProfile.email}
                id={userProfile.id}
                imageProfile={userProfile.imageProfile}
            />
            
            <h5 style={{textAlign:"center", color:"midnightblue", marginTop:"15px"}}><strong>Keebs</strong></h5>
            
            <div className="container">
                <div className="row">
                    {props.profile.keebs !== null ?
                        props.profile.keebs
                            .map(keebs =>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <ViewKeebs
                                        key={keebs.id}
                                        maker={keebs.maker}
                                        name={keebs.name}
                                        id={keebs.id}
                                    />
                                </div>
                            )
                        : null}
                </div>
            </div>
        </div>
    )
}
