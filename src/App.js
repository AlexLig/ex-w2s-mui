import React, { Component } from 'react'
import E4 from './components/E4'
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import { Grid, Paper } from '@material-ui/core'
import E8 from './components/E8/E8'

class App extends Component {
  render() {
    return (
      // <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="center">
        <Grid item xs={10} md={8} lg={5} style={{ maxWidth: 500 }}>
          <Paper>
            <E4 />
          </Paper>
        </Grid>
        <Grid item xs={10} md={8} lg={5} style={{ maxWidth: 500 }}>
          <Paper>
            <E8 />
          </Paper>
        </Grid>
      </Grid>
      // <E4 />
      // </MuiPickersUtilsProvider>
    )
  }
}

export default App
