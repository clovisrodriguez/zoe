import React from "react"

import Layout from "./layout"
import { Grid, Typography } from "@material-ui/core"
import CreateProductForm from "./createProduct"

export default function Dashboard() {
  return (
    <Layout>
      <Grid item container xs={3}>
        <Typography>hi this is a container</Typography>
      </Grid>
      <Grid item container xs={9}>
        <CreateProductForm />
      </Grid>
    </Layout>
  )
}
