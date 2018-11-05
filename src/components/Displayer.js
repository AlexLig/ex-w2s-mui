import React, { Fragment } from 'react'
import { TextField } from '@material-ui/core'

const Displayer = props => {
  const { erganiReadable, erganiCode } = props
  return (
    <Fragment>
      <TextField
        label="Στοιχεία αποστολής μηνύματος"
        value={erganiReadable}
        margin="normal"
        fullWidth
        InputProps={{
          readOnly: true,
        }}
      />
      <br />
      <TextField
        label="Κωδικός αποστολής μηνύματος"
        value={erganiCode}
        margin="normal"
        fullWidth
        InputProps={{
          readOnly: true,
        }}
      />
    </Fragment>
  )
}
export default Displayer