import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import API from './utils/API'
// Components
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'
// Pages
import Home from './pages/Home'
import Keebs from './pages/Keebs'
import KeebDetail from './pages/KeebDetail'
import Parts from './pages/Parts'


function App() {
  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: ""
  })

  const [profileState, setProfileState] = useState({
    name: "",
    email: "",
    keebs: [],
    token: "",
    id: "",
    isLoggedIn: false
  })

  useEffect(() => { fetchUserData() }, [])

  function fetchUserData() {
    const token = localStorage.getItem('token')
    API.getProfile(token).then(profileData => {
      if (profileData) {
        setProfileState({
          name: profileData.name,
          email: profileData.email,
          keebs: profileData.Keebs,
          token: token,
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
          id: "",
          isLoggedIn: false
        })
      }
    })
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
      })
      refreshPage()
    }
  }

  function refreshPage() {
    setInterval(function () {
      window.location.reload(false)
    }, 10)
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
    refreshPage()
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
      />
      <Route exact path="/">
        {/* <Jumbotron /> */}
        <h1 style={{textAlign:"center", color:"midnightblue"}}>My Keebs!</h1>
        <Home
          profile={profileState}
        />
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
      <Footer />
    </Router>
  );
}

export default App;