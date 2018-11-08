import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import Displayer from './Displayer'
import VatNumbers from './VatNumbers'
import DateTimeReason from './DateTimeReason'
import DateTimeForm from './DateTimeForm'

const parse = form => form.afmEmployee + ' ' + form.afmEmployer
const validate = (form) => {
  const { afmEmployer, ameEmployer, afmEmployee } = form
  return {
    afmEmployerError: afmEmployer.length !== 9 || isNaN(afmEmployer),
    ameEmployerError: ameEmployer.length !== 10 || isNaN(ameEmployer),
    afmEmployeeError: afmEmployee.length !== 9 || isNaN(afmEmployee),
  }
}
class E4 extends Component {
  state = {
    form: {
      afmEmployer: '',
      ameEmployer: '',
      afmEmployee: '',
      date:'',
      start:'',
      finish:'',
      isWork: true
    },
    dateTimeReason: [] // TODO: reset DTR array on afm change!
  }
  addDateTimeReason = () => {
    const {date, start, finish , isWork} = this.state.form
    this.setState({
      dateTimeReason: [...this.state.dateTimeReason,{date: date, start: start, finish: finish, isWork: isWork}]
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
    const errors = validate(this.state.form)
    return (
      <form onClick={this.handleSubmit}>
        <VatNumbers onChange={this.handleChange} form={this.state.form} errors={errors} />
        <br />

        <DateTimeReason onChange={this.handleChange} form={this.state.form} onAddDateTimeReason= {this.addDateTimeReason} />
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
