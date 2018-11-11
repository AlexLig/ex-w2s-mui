import React, { Component } from 'react'
import { Button, withStyles, Grid } from '@material-ui/core'
import Displayer from '../Displayer'
import VatNumbers from '../VatNumbers'
import e8parser from '../../e8parser'
import Overtime from './Overtime';

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


class E8 extends Component {
  state = {
    form: {
      afmEmployer: '',
      ameEmployer: '',
      afmEmployee: '',
      overtimeHours: '',
      startHour: '1600',
      finishHour: '',
    },
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
      startHour: true,
      finishHour: true
    },


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
      () => this.shouldDisable(name)
    )
  }
  handleEdit = name => () => {
    this.setState({
      isDisabled: {
        ...this.state.isDisabled,
        [name]: false,
      },
    })
  }
  handleSubmit = event => {
    console.log(this.state.form)
    event.preventDefault()
  }
  handleChangeOvertimeHours = event => ({ target: { value } }) => {
    this.setState({
      form: {
        ...this.state.form,
        overtimeHours: value,
        finishHour: parseInt(this.state.form.startHour) + parseInt(value)
      }
    })
  }
  handleOvertimeBlur = name => () => {
    this.setState({
      isDisabled: {
        ...this.state.isDisabled,
        [name]: true,
      },
    })
  }

  render() {
    const { isValid, isTouched, isDisabled } = this.state
    // const classes = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container direction="column" justify="center" alignItems="center" spacing={40}>
          <Grid item sm={6} xs={8}>
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
          <Grid item sm={6} xs={8}>
            <Overtime
              onChange={this.handleChange}
              onChangeOvertimeHours={this.handleChangeOvertimeHours}
              onEdit={this.handleEdit}
              onBlur={this.handleOvertimeBlur}
              form={this.state.form}
              isDisabled={this.state.isDisabled} />
          </Grid>

          <Grid item sm={6} xs={8}>
            <Displayer
              erganiCode={e8parser(this.state.form)}
            />
          </Grid>
          <Grid item sm={6} xs={8}>
            <Button variant="outlined" type="submit">
              Αποστολη Μηνυματος
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

export default withStyles(styles)(E8)
