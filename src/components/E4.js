import React, { Component } from 'react'
import { Button, withStyles, Grid } from '@material-ui/core'
import Displayer from './Displayer'
import VatNumbers from './VatNumbers'
import DateTimeReason from './DateTimeReason'
import DateTimeForm from './DateTimeForm'
import DateTimeReasonCollection from './DateTimeReasonCollection'
import e4parser from '../e4parser'

const isValidVnum = (fieldValue, fieldName) => {
  const rules = {
    afmEmployer: 9,
    ameEmployer: 10,
    afmEmployee: 9,
  }
  return fieldValue.length === rules[fieldName] && !isNaN(fieldValue)
}

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
  { key: 'Διάλειμμα', value: false },
]

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
    dateTimeReason: [],
    lastDateTimeReason: [],

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

    snackbar: {
      open: false,
      message: null,
    },
    popper: {
      anchorEl: null,
      open: false,
      content: null,
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

  shouldDisable = name => {
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
      form: {
        ...this.state.form,
        date: '',
        start: '',
        finish: '',
        isWork: !isWork,
      },
    })
  }
  handleChange = name => ({ target: { value } }) => {
    if (name === 'isWork')
      this.setState({
        form: {
          ...this.state.form,
          [name]: value,
        },
      })
    else
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
      () => this.shouldDisable(name)
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
  handleChipClick = dtr => event => {
    this.setState({
      popper: {
        anchorEl: event.currentTarget,
        open: true,
        content: `${dtr.date}, ${dtr.start} - ${dtr.finish}`,
      },
    })
  }
  handleChipDelete = (dtr, i) => () => {
    this.setState(prevState => {
      const dtrArray = prevState.dateTimeReason

      return {
        lastDateTimeReason: [dtr],
        dateTimeReason: dtrArray.filter(el => dtrArray.indexOf(el) !== i),
        snackbar: {
          open: true,
          message: `${dtr.isWork ? 'Απασχόληση' : 'Διάλειμμα'}: ${dtr.date}, ${
            dtr.start
          } - ${dtr.finish}`,
        },
      }
    })
  }
  handleUndoChipDelete = () => {
    this.setState(prevState => ({
      dateTimeReason: [
        ...prevState.dateTimeReason,
        ...prevState.lastDateTimeReason,
      ],
    }))
    this.handleSnackbarClose()
  }
  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return

    this.setState(prevState => ({
      snackbar: { ...prevState.snackbar, open: false },
    }))
  }
  handlePopperClose = () =>
    this.setState(prevState => ({
      popper: { ...prevState.popper, open: false },
    }))

  render() {
    const { isValid, isTouched, isDisabled } = this.state
    const classes = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container direction="column"  justify="center" alignItems="center" spacing={40}>
          <Grid item style={{ backgroundColor: 'gray' }} sm={6} xs={8}>
            <VatNumbers
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              onEdit={this.handleEdit}
              form={this.state.form}
              isValid={isValid}
              isTouched={isTouched}
              isDisabled={isDisabled}
            />
          </Grid>
          <Grid item style={{ backgroundColor: 'gray' }} sm={6} xs={8}>
            <DateTimeReason
              onChange={this.handleChange}
              form={this.state.form}
              onAddDateTimeReason={this.addDateTimeReason}
              reasons={reasons}
              classes={classes}
            />
          </Grid>

          <Grid item style={{ backgroundColor: 'gray' }} sm={6} xs={8}>
            <DateTimeReasonCollection
              dtrArray={this.state.dateTimeReason}
              onChipClick={this.handleChipClick}
              onChipDelete={this.handleChipDelete}
              popper={this.state.popper}
              onPopperClose={this.handlePopperClose}
              snackbar={this.state.snackbar}
              onSnackbarClose={this.handleSnackbarClose}
              onUndoChipDelete={this.handleUndoChipDelete}
            />
          </Grid>
          <Grid item style={{ backgroundColor: 'gray' }} sm={6} xs={8}>
            <Displayer
              erganiCode={e4parser(this.state.form, this.state.dateTimeReason)}
            />
          {/* </Grid> */}
          {/* <Grid item style={{ backgroundColor: 'gray' }} > */}
            <Button variant="outlined" type="submit">
              Αποστολη Μηνυματος
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

export default withStyles(styles)(E4)
