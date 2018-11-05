import React, { Component, Fragment } from 'react'
import { Button } from '@material-ui/core'
import Displayer from './Displayer'
import E4form from './E4form'
import DateTimeReason from './DateTimeReason';

class E4wrapper extends Component {
  state = {
    e4: {
      afmEmployer: '',
      ameEmployer: '',
      afmEmployee: '',
      dateTimeReason: [],
    },
    erganiReadable:"",
    erganiCode:""
  }
  addDateTimeReason = dateTimeReason => {
    this.setState({
      e4:{
        ...this.state.e4,
        dateTimeReason: [...this.state.e4.dateTimeReason, dateTimeReason]
      }
    })
  }
  handleChange = name => ({ target: { value } }) => {
    this.setState({
      e4: {
        ...this.state.e4,
        [name]: value,
      },
    })
  }
  handleSubmit = event => {
    console.log(this.state.e4)
    event.preventDefault()
  }
  render() {
    return (
      <Fragment>
        <E4form onChange={this.handleChange} e4={this.state.e4} />
        <br />
        {/* <DateTimeReason onChange={} onAddDate={} /> */}
        <DateTimeReason onAddDate={this.addDateTimeReason} />
        <br />
        <Displayer 
          erganiReadable={this.state.erganiReadable} 
          erganiCode={this.state.erganiCode} 
        />
        <br />
        <Button variant="outlined" onClick={this.handleSubmit}>
          ΥΠΟΒΟΛΗ
        </Button>
      </Fragment>
    )
  }
}

export default E4wrapper
