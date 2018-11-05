import React, { Component } from 'react';
import E4wrapper from './components/E4wrapper';
import E4form from './components/E4form';
import DateTimeForm from './components/DateTimeForm';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

class App extends Component {
  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <E4wrapper/> 
      <E4form/>
      <DateTimeForm/>
      </MuiPickersUtilsProvider>
    )
  }
}

export default App;
