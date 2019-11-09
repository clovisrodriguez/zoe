import React from "react"

import { Auth } from "aws-amplify"
import { navigate } from "gatsby"

import {
  Button,
  Container,
  LinearProgress,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import Notificator from "../notificator"
import SEO from "../seo"

const styles = {
  root: {
    background: "#0E4462",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    maxWidth: "30rem",
  },
  button: {
    marginTop: "2rem",
    background: "#0E4462",
    color: "white",
    "&:hover": {
      background: "#3086A7",
    },
  },
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.setUser = this.setUser.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.singIn = this.singIn.bind(this)
    this.closeError = this.closeError.bind(this)
    this.state = {
      user: "",
      password: "",
      error: "",
      loading: false,
    }

    Auth.currentSession()
      .then(() => navigate("/admin/dashboard"))
      .catch(err => null)
  }

  setUser(event) {
    this.setState({ user: event.target.value })
  }

  setPassword(event) {
    this.setState({ password: event.target.value })
  }

  closeError() {
    this.setState({ error: "" })
  }

  async singIn() {
    const { user, password } = this.state

    this.setState({ loading: true })

    try {
      const session = await Auth.signIn(user, password)
      navigate("/admin/dashboard")
    } catch (err) {
      if (err.code === "UserNotFoundException") {
        this.setState({ error: "Usuario no encontrado" })
      } else if (err.code === "UserNotConfirmedException") {
        this.setState({ error: "Cambio de clave, contacta al administrador" })
      } else if (err.code === "NotAuthorizedException") {
        this.setState({ error: "La clave no es correcta" })
      }
      this.setState({ loading: false })
    }
  }

  render() {
    const { classes } = this.props
    const { error, loading } = this.state
    return (
      <Container className={classes.root} maxWidth="xl">
        <SEO title="Admin" />
        <Paper className={classes.box}>
          <Typography>Ingresa al modulo administrativo</Typography>
          <TextField
            id="user"
            label="Usuario"
            type="text"
            margin="normal"
            onChange={this.setUser}
          ></TextField>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            onChange={this.setPassword}
          ></TextField>
          <Button className={classes.button} onClick={this.singIn}>
            Ingresar
          </Button>
          {loading && <LinearProgress color="secondary" />}
          {error && (
            <Notificator
              variant="error"
              message={error}
              onClose={this.closeError}
            />
          )}
        </Paper>
      </Container>
    )
  }
}

export default withStyles(styles)(Login)
