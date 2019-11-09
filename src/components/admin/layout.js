import React from "react"

import { Auth } from "aws-amplify"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../../theme"
import { ThemeProvider } from "@material-ui/core/styles"
import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  Container,
  Grid,
} from "@material-ui/core"
import SEO from "../seo"
import { navigate } from "@reach/router"

const useStyles = makeStyles(() => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()

  function signOut() {
    Auth.signOut()
    navigate("/admin")
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar color="primary" position="static">
        <SEO title="Panel"></SEO>
        <Toolbar className={classes.toolbar}>
          <Typography>Modulo Administrativo</Typography>
          <Button onClick={signOut} color="inherit">
            Salir
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container>{children}</Grid>
      </Container>
    </ThemeProvider>
  )
}
