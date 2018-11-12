import React from 'react'

import Displayer from './Displayer'
import VatNumbers from './VatNumbers'
import DateTimeReason from './DateTimeReason'
import DateTimeReasonCollection from './DateTimeReasonCollection'
import e4parser from '../e4parser'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import validate from '../utils/validate'

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

class E4 extends React.Component {
  state = {
    form: {
      afmEmployer: '',
      ameEmployer: '',
      afmEmployee: '',
      date: '221118',
      start: '0800',
      finish: '1500',
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

  setIsValid = name => {
    const lengths = {
      afmEmployer: 9,
      ameEmployer: 10,
      afmEmployee: 9,
    }
    const fieldValue = this.state.form[name]
    const rules = [fieldValue.length === lengths[name], !isNaN(fieldValue)]

    this.setState(prevState => ({
      isValid: {
        ...prevState.isValid,
        [name]: validate(rules),
      },
    }))
  }

  shouldDisable = name => {
    this.setIsValid(name)
    this.setState(prevState => ({
      isDisabled: {
        ...prevState.isDisabled,
        [name]: this.state.isValid[name],
      },
    }))
  }
  addDateTimeReason = () => {
    const { date, start, finish, isWork } = this.state.form
    const { isValid } = this.state

    // const arrayOfVals = Object.values(isValid) //Works but ts-check throws error
    const arrayOfValues = Object.keys(isValid).map(key => isValid[key])
    const allIsValid = validate(arrayOfValues)

    if (allIsValid) {
      this.setState(prevState => ({
        dateTimeReason: [
          ...prevState.dateTimeReason,
          { date: date, start: start, finish: finish, isWork: isWork },
        ],
        form: {
          ...prevState.form,
          date: '221118',
          start: '0800',
          finish: '1500',
          isWork: !isWork,
        },
      }))
    } else alert('invalid')
  }

  handleChange = name => ({ target: { value } }) => {
    // Need '[name]: value.trim()' ? Mask already trims.
    this.setState(
      prevState => ({
        form: {
          ...prevState.form,
          [name]: value,
        },
      }),
      () => (name === 'isWork' ? null : this.setIsValid(name))
    )
  }

  handleBlur = name => () => {
    this.setState(
      prevState => ({
        isTouched: {
          ...prevState.isTouched,
          [name]: true,
        },
      }),
      () => this.shouldDisable(name)
    )
  }

  handleEdit = name => () => {
    this.setState(prevState => {
      if (prevState.dateTimeReason.length > 0)
        return {
          dateTimeReason: [],
          isDisabled: {
            ...prevState.isDisabled,
            [name]: false,
          },
        }
      else
        return {
          isDisabled: {
            ...prevState.isDisabled,
            [name]: false,
          },
        }
    })
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
        <Grid container direction="column" justify="space-evenly" spacing={8}>
          <Grid item>
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
          <Grid item>
            <DateTimeReason
              onChange={this.handleChange}
              form={this.state.form}
              onAddDateTimeReason={this.addDateTimeReason}
              reasons={reasons}
              classes={classes}
            />
          </Grid>

          <Grid item>
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
          <Grid item>
            <Displayer
              erganiCode={e4parser(this.state.form, this.state.dateTimeReason)}
              style={{ padding: '10%' }}
            />
          </Grid>
          <Grid item style={{ marginLeft: 'auto' }}>
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
