import React from 'react'
import { TextField } from '@material-ui/core'

const parse = (form) => {
  const parsed = ""
  return parsed
}

export default (props) => {
  const afm = parse(props.form)
  return (
    <TextField
          id="standard-read-only-input"
          label="Κωδικός αποστολής μηνύματος"
          value = {afm}
          margin="normal"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          
        />
  )
}