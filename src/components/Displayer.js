import React from 'react'
import { TextField } from '@material-ui/core'

const Displayer = props => {
  return (
    <TextField
      label="Κωδικός αποστολής μηνύματος"
      value={props.erganiCode}
      margin="normal"
      fullWidth
      InputProps={{
        readOnly: true,
      }}
    />
  )
}
export default Displayer
