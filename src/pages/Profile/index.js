import React, { useState, useEffect } from 'react'
import UserProfile from '../../components/UserProfile'
import ViewKeebs from '../../components/ViewKeebs'
import ViewKeysets from '../../components/ViewKeysets'
import API from '../../utils/API'

export default function Profile(props) {
    const [userProfile, setUserProfile] = useState({
        email: "",
        name: "",
        password: "",
        profileImage: "",
        id: ""
    })

    const [extraKeysets, setExtraKeysets] = useState({
        extras: []
    })

    useEffect(() => {
        const token = localStorage.getItem('token')
        API.getProfile(token).then(profileData => {
            if (profileData) {
                setUserProfile({
                    name: profileData.name,
                    email: profileData.email,
                    keebs: profileData.Keebs,
                    token: token,
                    id: profileData.id,
                    profileImage: profileData.profileImage,
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
                    profileImage: "",
                    isLoggedIn: false
                })
            }
        })

        API.getAllExtraKeysets().then(data => {
            setExtraKeysets({
                extras: data
            })
        })
    }, [])

    return (
        <div>
            <UserProfile
                name={userProfile.name}
                email={userProfile.email}
                id={userProfile.id}
                profileImage={userProfile.profileImage}
            />

            <h5 style={{ textAlign: "center", color: "midnightblue", marginTop: "15px" }}><strong>Keebs</strong></h5>

            <div className="container">
                <div className="row">
                    {props.profile.keebs !== null ?
                        props.profile.keebs
                            .map(keebs =>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
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

                <h5 style={{ textAlign: "center", color: "midnightblue", marginTop: "15px" }}><strong>Keysets</strong></h5>
                <div className="row">
                    {extraKeysets.extras !== null ?
                        extraKeysets.extras
                            .map(keysets =>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <ViewKeysets
                                        key={keysets.id}
                                        keyset={keysets.keyset}
                                        maker={keysets.maker}
                                        id={keysets.id}
                                    />
                                </div>
                            )
                        : null}
                </div>
            </div>
        </div>
    )
}