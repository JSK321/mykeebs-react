import React, { useState } from 'react'

function App() {
  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: ""
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setLoginFormState({
      ...loginFormState,
      [name]: value
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    
  }

  return (
    <div className="App">
      <h1>My Keebs</h1>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleInputChange} value={loginFormState.email} type='text' name='email' placeholder='email' />
        <input onChange={handleInputChange} value={loginFormState.password} type='password' name='password' placeholder='password' />
        <input type='submit' value="login" />
      </form>
    </div>
  );
}

export default App;
