import React, { Component } from 'react'
import E4 from './components/E4'
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'

class App extends Component {
  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <E4 />
      </MuiPickersUtilsProvider>
    )
  }
}

export default App
