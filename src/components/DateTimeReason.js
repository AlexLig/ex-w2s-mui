import React, { Component, Fragment } from 'react'

import { Button, TextField } from '@material-ui/core'

class DateTimeReason extends Component {
  state = {
    date: '',
    start: '',
    end: '',
    isWork: null,
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      ...this.state,
      [name]: value,
    })
  }
  handleSubmit = event => {
    this.props.onAddDateTimeReason(this.state)
  }
  render() {
    return (
      <Fragment>
        <TextField
          label="date"
          value={this.state.date}
          onChange= {this.handleChange('date')}
          margin="normal"
          fullWidth
        />
        <TextField
          label="start"
          value={this.state.start}
          onChange= {this.handleChange('start')}
          margin="normal"
          fullWidth
        />
        <TextField
          label="end"
          value={this.state.end}
          onChange= {this.handleChange('end')}
          margin="normal"
          fullWidth
        />
        <TextField
          label="isWork"
          value={this.state.isWork}
          onChange= {this.handleChange('isWork')}
          margin="normal"
          fullWidth
        />
        
        <Button variant="outlined" onClick={this.handleSubmit}>
          ΥΠΟΒΟΛΗ
        </Button>
      </Fragment>
    )
  }
}

export default DateTimeReason