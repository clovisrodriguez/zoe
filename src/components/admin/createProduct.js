import React from "react"

import {
  Button,
  Paper,
  Typography,
  TextField,
  MenuItem,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { DropzoneArea } from "material-ui-dropzone"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: "1rem",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
}))

const mock = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
]

export default function CreateProductForm() {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography variant="h4">Creación de un nuevo producto</Typography>
      <form className={classes.form}>
        <TextField
          id="title"
          label="nombre del producto"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="price"
          label="precio"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="category"
          select
          label="Categoría"
          value={mock}
          margin="normal"
          variant="outlined"
        >
          {mock.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="description"
          label="Descripción"
          multiline
          rows="5"
          margin="normal"
          variant="outlined"
        />
        <DropzoneArea
          acceptedFiles={["image/*"]}
          filesLimit={3}
          maxFileSize={3000000}
          dropzoneText={"Agrega las imagenes del producto"}

        />
      </form>
    </Paper>
  )
}
