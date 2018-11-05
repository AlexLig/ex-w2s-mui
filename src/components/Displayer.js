import React, { Fragment } from 'react'
import { TextField } from '@material-ui/core'

export default props => {
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
