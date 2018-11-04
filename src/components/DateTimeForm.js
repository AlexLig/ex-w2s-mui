import React, { Component } from 'react'
import DatePicker from 'material-ui-pickers/DatePicker'
import TimePicker from 'material-ui-pickers/TimePicker'
import AccessTime from '@material-ui/icons/AccessTimeRounded'
import { Button } from '@material-ui/core'

class DateTimeForm extends Component {
  state = {
    selectedDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date })
  }

  handleStartTimeChange = startTime => {
    this.setState({ startTime: startTime })
  }

  handleEndTimeChange = endTime => {
    this.setState({ endTime: endTime })
  }

  render() {
    const { selectedDate, startTime, endTime } = this.state

    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="picker" style={{ marginTop: '10px' }}>
          <DatePicker
            showTodayButton
            todayLabel="σημερα"
            cancelLabel="ακυρωση"
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
            keyboard
            keyboardIcon={<AccessTime />}
            todayLabel="τωρα"
            cancelLabel="ακυρωση"
            showTodayButton
            variant="outlined"
            ampm={false}
            label="Έναρξη"
            value={startTime}
            onChange={this.handleStartTimeChange}
          />
          <TimePicker
            autoOk
            keyboard
            keyboardIcon={<AccessTime />}
            todayLabel="τωρα"
            showTodayButton
            variant="outlined"
            ampm={false}
            label="Λήξη"
            value={endTime}
            onChange={this.handleEndTimeChange}
          />
          <Button variant="raised" color="primary" type="submit">
            Προσθηκη
          </Button>
        </div>
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

export default DateTimeForm
