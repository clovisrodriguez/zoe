import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { Auth } from "aws-amplify"

const AuthShell = ({ component: Component, location, ...rest }) => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    async function getSession() {
      try {
        const session = await Auth.currentSession()
        setSession(session)
      } catch {
        navigate("/admin")
      }
    }

    getSession()
  }, [])

  return <Component {...rest} />
}

export default AuthShell
