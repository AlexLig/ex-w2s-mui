import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Displayer = props => {
  return (
    <Grid container justify="center" spacing={16} alignItems="center">
      <Grid item xs={12}>
        <TextField
          label="Κωδικός αποστολής μηνύματος"
          value={props.erganiCode}
          margin="normal"
          fullWidth
          multiline
          rowsMax="4"
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      
      
    </Grid>
  )
}
export default Displayer
