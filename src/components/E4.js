import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import Displayer from './Displayer'
import VatNumbers from './VatNumbers'
import DateTimeReason from './DateTimeReason'
import DateTimeForm from './DateTimeForm'

const isValidVnum = (fieldValue, fieldName) => {
  const rules = {
    afmEmployer: 9,
    ameEmployer: 10,
    afmEmployee: 9,
  }
  return fieldValue.length === rules[fieldName] && !isNaN(fieldValue)
}
const parse = form => form.afmEmployee + ' ' + form.afmEmployer

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
    isValid: {
      afmEmployer: false,
      ameEmployer: false,
      afmEmployee: false,
    },
    isTouched: {
      afmEmployer: false,
      ameEmployer: false,
      afmEmployee: false,
    },
    isDisabled: {
      afmEmployer: false,
      ameEmployer: false,
      afmEmployee: false,
    },
  }
  rules = {
    afmEmployer: 9,
    ameEmployer: 10,
    afmEmployee: 9,
  }
  validate = name => {
    const fieldValue = this.state.form[name]
    this.setState({
      isValid: {
        ...this.state.isValid,
        [name]: isValidVnum(fieldValue, name),
      },
    })
  }
  shoudDisable = name => {
    this.validate(name)
    this.setState({
      isDisabled: {
        ...this.state.isDisabled,
        [name]: this.state.isValid[name],
      },
    })
  }
  addDateTimeReason = () => {
    const { date, start, finish, isWork } = this.state.form
    this.setState({
      dateTimeReason: [
        ...this.state.dateTimeReason,
        { date: date, start: start, finish: finish, isWork: isWork },
      ],
    })
  }
  handleChange = name => ({ target: { value } }) => {
    this.setState(
      {
        form: {
          ...this.state.form,
          [name]: value.trim(),
        },
      },
      () => this.validate(name)
    )
  }
  handleBlur = name => () => {
    this.setState(
      {
        isTouched: {
          ...this.state.isTouched,
          [name]: true,
        },
      },
      () => this.shoudDisable(name)
    )
  }
  handleEdit = name => () => {
    if (this.state.dateTimeReason.length > 0) {
      this.setState({
        dateTimeReason: [],
        isDisabled: {
          ...this.state.isDisabled,
          [name]: false,
        },
      })
    } else {
      this.setState({
        isDisabled: {
          ...this.state.isDisabled,
          [name]: false,
        },
      })
    }
  }
  handleSubmit = event => {
    console.log(this.state.form)
    event.preventDefault()
  }
  render() {
    const { isValid, isTouched, isDisabled } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <VatNumbers
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onEdit={this.handleEdit}
          form={this.state.form}
          isValid={isValid}
          isTouched={isTouched}
          isDisabled={isDisabled}
        />
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
