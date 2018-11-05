import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import Displayer from './Displayer'
import VatNumbers from './VatNumbers'
import DateTimeReason from './DateTimeReason'
import DateTimeForm from './DateTimeForm'

const parse = form => form.afmEmployee + ' ' + form.afmEmployer

class E4 extends Component {
  state = {
    form: {
      afmEmployer: '',
      ameEmployer: '',
      afmEmployee: '',
      dateTimeReason: [],
    },
  }
  addDateTimeReason = dateTimeReason => {
    this.setState({
      form: {
        ...this.state.form,
        dateTimeReason: [...this.state.form.dateTimeReason, dateTimeReason],
      },
    })
  }
  handleChange = name => ({ target: { value } }) => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
        dateTimeReason: [],
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

        <DateTimeReason onAddDateTimeReason={this.addDateTimeReason} />
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
