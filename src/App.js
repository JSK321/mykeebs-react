import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import API from './utils/API'
import KeebCard from './components/KeebCard'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {
  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: ""
  })

  const [profileState, setProfileState] = useState({
    name: "",
    email: "",
    keebs: [],
    isLoggedIn: false
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    API.getProfile(token).then(profileData => {
      if (profileData) {
        setProfileState({
          name: profileData.name,
          email: profileData.email,
          keebs: profileData.Keebs,
          isLoggedIn: true
        })
      } else {
        localStorage.removeItem("token");
        setProfileState({
          name: "",
          email: "",
          keebs: [],
          isLoggedIn: false
        })
      }
    })
  }, [])

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
            isLoggedIn: true
          })
        })
      })
    }
  }

  return (
    <Router>
      <NavBar
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        email={loginFormState.email}
        password={loginFormState.password}
      />
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;


{/* {profileState.isLoggedIn ? profileState.keebs.map(keebObj =>
          <KeebCard
            name={keebObj.name}
            size={keebObj.size}
            maker={keebObj.maker}
            case={keebObj.case}
            color={keebObj.color}
            plate={keebObj.plate}
          />) : <h2>Login to see your Keebs!</h2>} */}