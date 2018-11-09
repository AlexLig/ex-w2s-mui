import React, { Component } from 'react'
import { Button, withStyles } from '@material-ui/core'
import Displayer from './Displayer'
import VatNumbers from './VatNumbers'
import DateTimeReason from './DateTimeReason'
import DateTimeForm from './DateTimeForm'
import DateTimeReasonCollection from './DateTimeReasonCollection'

const parse = form => form.afmEmployee + ' ' + form.afmEmployer

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
  },
  typography: {
    margin: theme.spacing.unit * 2,
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
    lastDateTimeReason: [],
    // isDisabled: {
    //   afmEmployer: false,
    //   ameEmployer: false,
    //   afmEmployee: false,
    // },
    snackbar: {
      open: false,
      message: null,
    },
    popover: {
      anchorEl: null,
      open: false,
      content: null,
    },
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
      // lastDateTimeReason:[],
      form: {
        ...this.state.form,
        date: 'TEST',
        start: 'TEST',
        finish: 'Test',
        isWork: !isWork,
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
  handleChipClick = dtr => event => {
    this.setState({
      popover: {
        anchorEl: event.currentTarget,
        open: true,
        content: `${dtr.date}, ${dtr.start} - ${dtr.finish}`,
      },
    })
  }
  handleChipDelete = (dtr, i) => () => {
    const dtrArray = this.state.dateTimeReason

    this.setState(prevState => {
      const dtrArray = prevState.dateTimeReason

      return {
        lastDateTimeReason: [dtr],
        dateTimeReason: dtrArray.filter(el => dtrArray.indexOf(el) !== i),
        snackbar: {
          open: true,
          message: `${dtr.date}, ${dtr.start} - ${dtr.finish}`,
        },
      }
    })
  }
  handleUndoChipDelete = () => {
    this.setState(prevState => ({
      dateTimeReason: [...prevState.dateTimeReason, ...prevState.lastDateTimeReason],
    }))
    this.handleSnackbarClose()
  }
  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return

    this.setState(prevState => ({
      snackbar: { ...prevState.snackbar, open: false },
    }))
  }
  handlePopoverClose = () =>
    this.setState(prevState => ({
      popover: { ...prevState.popover, open: false },
    }))

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
        <div className="chips-container">
          <DateTimeReasonCollection
            dtrArray={this.state.dateTimeReason}
            onChipClick={this.handleChipClick}
            onChipDelete={this.handleChipDelete}
            popover={this.state.popover}
            onPopoverClose={this.handlePopoverClose}
            snackbar={this.state.snackbar}
            onSnackbarClose={this.handleSnackbarClose}
            onUndoChipDelete={this.handleUndoChipDelete}
          />
        </div>
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
