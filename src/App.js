// React
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// Context
import { ProfileProvider } from './contexts/ProfileContext'
// Pages
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import ProfilePage from './pages/ProfilePage'
import UpdateProfile from './pages/UpdateProfile'
import AddKeebPage from './pages/AddKeebPage'
import KeebUpdatePage from './pages/KeebUpdatePage'
import KeebPhotosUpdatePage from './pages/KeebPhotosUpdatePage'
import AddPartsPage from './pages/AddPartsPage'
import RegisterPage from './pages/RegisterPage'
import NoMatch from './pages/NoMatch'


function App() {
  return (
    <ProfileProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route exact path="/signin">
            <SignInPage />
          </Route>
          <Route exact path="/updateprofile/:id">
            <UpdateProfile />
          </Route>
          <Route exact path="/addkeebform">
            <AddKeebPage />
          </Route>
          <Route exact path="/updatekeeb/:id">
            <KeebUpdatePage />
          </Route>
          <Route exact path="/updatekeeb/photos/:id">
            <KeebPhotosUpdatePage />
          </Route>
          <Route exact path="/addpartsform/:id">
            <AddPartsPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </ProfileProvider>
  );
}

export default App;