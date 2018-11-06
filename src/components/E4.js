import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import Displayer from './Displayer'
import VatNumbers from './VatNumbers'
import DateTimeReason from './DateTimeReason'
import DateTimeForm from './DateTimeForm'

const parse = form => form.afmEmployee + ' ' + form.afmEmployer

const defaultDTR = {
  date: '',
  start: '',
  finish: '',
  isWork: true,
}

class E4 extends Component {
  state = {
    form: {
      afmEmployer: '',
      ameEmployer: '',
      afmEmployee: '',
      date: '',
      start: '',
      finish: '',
      isWork: true,
    },
    dateTimeReason: [], // TODO: reset DTR array on afm change!
  }
  addDateTimeReason = () => {
    const { date, start, finish, isWork } = this.state.form
    this.setState({
      // Don't add if empty!
      dateTimeReason: [
        ...this.state.dateTimeReason,
        {
          date: date,
          start: start,
          finish: finish,
          isWork: isWork,
        },
      ],

      form: {
        ...this.state.form,
        date: '',
        start: '',
        finish: '',
        isWork: true,
      },
    })
  }
  handleChange = name => ({ target: { value } }) => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    })
  }
  handleSubmit = event => {
    console.log(this.state.form)
    event.preventDefault()
  }
  render() {
    return (
      <form onClick={this.handleSubmit}>
        <VatNumbers onChange={this.handleChange} form={this.state.form} />
        <br />

        <DateTimeReason
          onChange={this.handleChange}
          form={this.state.form}
          onAddDateTimeReason={this.addDateTimeReason}
        />
        <br />
        <DateTimeForm />
        <br />

        {/* TODO: <Chips /> */}
        <br />

        <Displayer erganiCode={parse(this.state.form)} />
        <br />

        <Button variant="outlined" type="submit">
          Αποστολη Μηνυματος
        </Button>
      </form>
    )
  }
}

export default E4
