import React from 'react'
import { TextField, Grid } from '@material-ui/core'

const Displayer = props => {
  return (
    <Grid container justify="center" spacing={16} alignItems="center">
      <Grid item xs={12}>
        <TextField
          label="Κωδικός αποστολής μηνύματος"
          value={props.erganiCode}
          margin="normal"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
    </Grid>
  )
}
export default Displayer
