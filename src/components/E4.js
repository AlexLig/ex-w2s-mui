import React, { Component } from 'react'
import { Button, Chip, Avatar, withStyles } from '@material-ui/core'
import Displayer from './Displayer'
import VatNumbers from './VatNumbers'
import DateTimeReason from './DateTimeReason'
import DateTimeForm from './DateTimeForm'

const parse = form => form.afmEmployee + ' ' + form.afmEmployer

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
})

const reasons = [
  { key: 'Απασχόληση', value: true },
  { key: 'Διακοπές', value: false },
]

class E4 extends Component {
  state = {
    form: {
      afmEmployer: '',
      ameEmployer: '',
      afmEmployee: '',
      date: new Date(),
      start: Date.now(),
      finish: Date.now(),
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
        date: 'TEST',
        start: 'TEST',
        finish: 'Test',
        isWork: isWork,
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
  handleChipClick = () => {}
  handleChipDelete = () => {}

  render() {
    const classes = this.props
    return (
      <form onClick={this.handleSubmit}>
        <VatNumbers onChange={this.handleChange} form={this.state.form} />
        <br />

        <DateTimeReason
          onChange={this.handleChange}
          form={this.state.form}
          onAddDateTimeReason={this.addDateTimeReason}
          reasons={reasons}
          classes={classes}
        />
        <br />
        <DateTimeForm />
        <br />
        {this.state.dateTimeReason.map(dtr => (
          <Chip
            avatar={<Avatar>{dtr.isWork ? 'Α' : 'Δ'}</Avatar>}
            // icon='A'
            className={classes.chip}
            label={`${dtr.date}, ${dtr.start} - ${dtr.finish}`}
            clickable
            color={dtr.isWork ? "primary" : "secondary"}
            variant="outlined"
            onDelete={this.handleChipDelete}
            onClick={this.handleChipClick}
          />
        ))}
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

export default withStyles(styles)(E4)
