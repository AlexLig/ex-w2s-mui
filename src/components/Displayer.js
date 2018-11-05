import React from 'react'
import { TextField } from '@material-ui/core'

const Displayer = props => {
  const { erganiCode } = props
  return (
    <TextField
      label="Κωδικός αποστολής μηνύματος"
      value={erganiCode}
      margin="normal"
      fullWidth
      InputProps={{
        readOnly: true,
      }}
    />
  )
}
export default Displayer
