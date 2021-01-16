import React, { useState, useEffect } from 'react'
import UserProfile from '../../components/UserProfile'
import ViewKeebs from '../../components/ViewKeebs'
import ViewKeysets from '../../components/ViewKeysets'
import API from '../../utils/API'

export default function Profile(props) {
    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
        const token = localStorage.getItem('token')
        API.getProfile(token).then(profileData => {
            if (profileData) {
                setUserProfile({
                    name: profileData.name,
                    email: profileData.email,
                    keebs: profileData.Keebs,
                    keysets: profileData.Extras,
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
                    keysets: [],
                    token: "",
                    id: "",
                    profileImage: "",
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
                profileImage={userProfile.profileImage}
            />

            <div className="container">
                <h3 style={{ textAlign: "center", color: "midnightblue", marginTop: "15px" }}><strong>Keebs</strong></h3>
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

                <h3 style={{ textAlign: "center", color: "midnightblue", marginTop: "15px" }}><strong>Keysets</strong></h3>
                <div className="row">
                    {props.profile.keysets !== null ?
                        props.profile.keysets
                            .map(keysets =>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <ViewKeysets
                                        key={keysets.id}
                                        keyset={keysets.keyset}
                                        type={keysets.type}
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