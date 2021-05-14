// React
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// Context
import { ProfileProvider } from './contexts/ProfileContext'
import { KeebProvider } from './contexts/KeebContext'
// Pages
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import Profile from './pages/Profile'
import UpdateProfile from './pages/UpdateProfile'
import AddKeebPage from './pages/AddKeebPage'
import KeebUpdatePage from './pages/KeebUpdatePage'
import AddPartsPage from './pages/AddPartsPage'
import Keysets from './pages/Keysets'
import ExtraKeysets from './pages/ExtraKeysets'
import UpdateKeyset from './pages/UpdateKeyset'
import RegisterPage from './pages/RegisterPage'
import NoMatch from './pages/NoMatch'


function App() {
  return (
    <ProfileProvider>
      <KeebProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
              <Footer />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/signin">
              <SignInPage />
            </Route>
            <Route exact path="/updateprofile">
              <UpdateProfile />
            </Route>
            <Route exact path="/addkeebform">
              <AddKeebPage />
            </Route>
            <Route exact path="/updatekeeb/:id">
              <KeebUpdatePage />
            </Route>
            <Route exact path="/addpartsform/:id">
              <AddPartsPage />
            </Route>
            <Route exact path="/addextrakeysetform">
              <ExtraKeysets />
            </Route>
            <Route exact path="/keyset/:id">
              <Keysets />
            </Route>
            <Route exact path="/updatekeyset/:id">
              <UpdateKeyset />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </KeebProvider>
    </ProfileProvider>
  );
}

export default App;