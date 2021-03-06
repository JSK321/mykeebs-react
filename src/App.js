import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import API from './utils/API'
// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// Pages
import Home from './pages/Home'
import Profile from './pages/Profile'
import UpdateProfile from './pages/UpdateProfile'
import Keebs from './pages/Keebs'
import KeebDetail from './pages/KeebDetail'
import Parts from './pages/Parts'
import Keysets from './pages/Keysets'
import ExtraKeysets from './pages/ExtraKeysets'
import UpdateKeyset from './pages/UpdateKeyset'
import Register from './pages/Register'
import NoMatch from './pages/NoMatch'


function App() {
  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: ""
  })

  const [profileState, setProfileState] = useState({
    name: "",
    email: "",
    keebs: [],
    keysets: [],
    token: "",
    profileImage: "",
    id: "",
    isLoggedIn: false
  })

  useEffect(() => {
    fetchUserData()
  }, [])

  function fetchUserData() {
    const token = localStorage.getItem('token')
    if (localStorage.getItem('token') !== null) {
      API.getProfile(token).then(profileData => {
        if (profileData) {
          setProfileState({
            name: profileData.name,
            email: profileData.email,
            keebs: profileData.Keebs,
            keysets: profileData.Extras,
            token: token,
            profileImage: profileData.profileImage,
            id: profileData.id,
            isLoggedIn: true
          })
        } else {
          localStorage.removeItem("token");
          setProfileState({
            name: "",
            email: "",
            keebs: [],
            token: "",
            profileImage: "",
            id: "",
            isLoggedIn: false
          })
        }
      })
    }
  }

  const handleInputChange = event => {
    const { name, value } = event.target
    setLoginFormState({
      ...loginFormState,
      [name]: value
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!loginFormState.email || !loginFormState.password) {
      alert("Incorrect email/password, please try again")
    } else {
      API.login(loginFormState).then(newToken => {
        if (newToken === null) {
          alert("Incorrect email/password, please try again")
        } else {
          localStorage.setItem("token", newToken.token)
          API.getProfile(newToken.token).then(profileData => {
            setProfileState({
              name: profileData.name,
              email: profileData.email,
              keebs: profileData.Keebs,
              id: profileData.id,
              isLoggedIn: true
            })
          })
        }
      })
        .then(res => {
          window.location.reload(false)
        })
    }
  }

  const handleLogOut = event => {
    localStorage.removeItem("token");
    setProfileState({
      name: "",
      email: "",
      keebs: [],
      parts: [],
      token: "",
      isLoggedIn: false
    })
    window.location.reload(false)
  }

  return (
    <Router>
      <NavBar
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        handleLogOut={handleLogOut}
        email={loginFormState.email}
        password={loginFormState.password}
        isLoggedIn={profileState.isLoggedIn}
        id={profileState.id}
      />
      <Switch>
        <Route exact path="/">
          <h1
            style={{
              textAlign: "center",
              color: "midnightblue",
            }}>
            Keebs!
          </h1>
          <Home
            profile={profileState}
          />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Profile
            profile={profileState}
          />
        </Route>
        <Route exact path="/updateprofile">
          <UpdateProfile />
        </Route>
        <Route exact path="/addkeebform">
          <Keebs
            profile={profileState}
          />
        </Route>
        <Route exact path="/updatekeeb/:id">
          <KeebDetail
            profile={profileState}
            fetchData={fetchUserData}
          />
        </Route>
        <Route exact path="/addpartsform">
          <Parts
            profile={profileState}
          />
        </Route>
        <Route exact path="/addextrakeysetform">
          <ExtraKeysets
            profile={profileState}
          />
        </Route>
        <Route exact path="/keyset/:id">
          <Keysets />
        </Route>
        <Route exact path="/updatekeyset/:id">
            <UpdateKeyset />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;