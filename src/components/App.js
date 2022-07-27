import React from "react"
import Signup from "./authentication/Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./authentication/Profile"
import Login from "./authentication/Login"
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"
import Dashboard from "./howdui/Dashboard"
import Submit from "./howdui/Submit"
import MyPosts from "./howdui/MyPosts"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Howdui */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/submit" component={Submit} />
          <PrivateRoute exact path="/my-posts" component={MyPosts} />

          {/* Profile */}
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          {/* Auth */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  )
  }

export default App
