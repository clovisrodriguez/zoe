import React from "react"
import { Router } from "@reach/router"
import Login from "../components/admin/login"
import AuthShell from "../components/admin/authShell"
import Dashboard from "../components/admin/dashboard"

const App = () => (
  <Router>
    <Login path="/admin" />
    <AuthShell path="admin/dashboard" component={Dashboard} />
  </Router>
)

export default App
