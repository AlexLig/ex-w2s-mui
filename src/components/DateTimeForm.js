import React, { Component } from 'react'
import { TextField, withStyles } from '@material-ui/core'
import DatePicker from 'material-ui-pickers/DatePicker'
import TimePicker from 'material-ui-pickers/TimePicker'
import AvTimer from '@material-ui/icons/'

class DateTimeForm extends Component {
  classes = this.props
  state = {
    selectedDate: new Date(),
    startTime: new Date(),
    endTime:''
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date })
  }

  handleStartTimeChange = startTime => {
    this.setState({startTime: startTime})
  }

  render() {
    const {selectedDate, startTime} = this.state

    return (
      <form className={this.classes.container}>
      <div className="picker" style={{marginTop:'10px'}}>
        <DatePicker
          showTodayButton
          autoOk
          // keyboard
          variant="outlined"
          label="Ημέρα"
          value={selectedDate}
          onChange={this.handleDateChange}
          // animateYearScrolling
        />
        </div>
        <br />
        <div className="picker">
        <TimePicker
          autoOk
          showTodayButton
          variant="outlined"
          ampm={false}
          label="Έναρξη"
          value={startTime}
          onChange={this.handleStartTimeChange}
        >
          <AvTimer/>
        </TimePicker>
        </div>
        <TextField
          id="time"
          label="Ώρα"
          type="time"
          // defaultValue=""
          className={this.classes.time}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300,
          }}
        />
      </form>
    )
  }
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  time: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  date: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
})

export default withStyles(styles)(DateTimeForm)
