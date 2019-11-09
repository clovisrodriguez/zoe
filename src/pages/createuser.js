import React from "react"
import { withAuthenticator } from "aws-amplify-react"
import { Auth } from "aws-amplify"

const User = () => <button onClick={() => Auth.signOut()}>Sing out</button>

export default withAuthenticator(User)
