import React, { useState, useEffect } from 'react'
import API from './utils/API'

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

  return (
    <div className="App">
      <h1>My Keebs</h1>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleInputChange} value={loginFormState.email} type='text' name='email' placeholder='email' />
        <input onChange={handleInputChange} value={loginFormState.password} type='password' name='password' placeholder='password' />
        <input type='submit' value="login" />
      </form>
      {profileState.isLoggedIn ? profileState.keebs.map(keebObj => <p>{keebObj.name}</p>) : <h2>Login to see your Keebs!</h2>}
    </div>
  );
}

export default App;
