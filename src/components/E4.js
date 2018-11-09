import React, { Component } from 'react'
import {
  Button,
  Chip,
  Avatar,
  withStyles,
  Popover,
  Typography,
  Snackbar,
  IconButton,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Displayer from './Displayer'
import VatNumbers from './VatNumbers'
import DateTimeReason from './DateTimeReason'
import DateTimeForm from './DateTimeForm'

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
    dateTimeReasonArr: [], // TODO: reset DTR array on afm change!
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
      dateTimeReasonArr: [
        ...this.state.dateTimeReasonArr,
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
    const dtrArray = this.state.dateTimeReasonArr
    this.setState({
      dateTimeReasonArr: dtrArray.filter(el => dtrArray.indexOf(el) !== i),
      snackbar: {
        open: true,
        message: `${dtr.date}, ${dtr.start} - ${dtr.finish}`,
      },
    })
  }
  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return

    this.setState({ snackbar: { ...this.state.snackbar, open: false } })
  }

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
          <Popover
            open={this.state.popover.open}
            anchorEl={this.state.popover.anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={() =>
              this.setState({
                popover: { open: false, anchorEl: null, content: null },
              })
            }
            children={
              <Typography className={classes.typography}>
                {/* children={this.state.popover.content} */}
                {this.state.popover.content}
              </Typography>
            }
          />
          {this.state.dateTimeReasonArr.map((dtr, i) => (
            <Chip
              avatar={<Avatar>{dtr.isWork ? 'Α' : 'Δ'}</Avatar>}
              className={classes.chip}
              label={`${dtr.date}, ${dtr.start} - ${dtr.finish}`}
              clickable
              color={dtr.isWork ? 'primary' : 'secondary'}
              variant="outlined"
              onClick={this.handleChipClick(dtr)}
              onDelete={this.handleChipDelete(dtr, i)}
            />
          ))}
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.snackbar.open}
            autoHideDuration={4000}
            message={
              <span>Η καταχώρηση {this.state.snackbar.message} διαγράφηκε</span>
            }
            action={[
              <Button
                color="secondary"
                size="small"
                onClick={this.handleSnackbarClose}
                children="ΑΝΑΙΡΕΣΗ"
              />,
              <IconButton
                color="inherit"
                onClick={this.handleSnackbarClose}
                children={<CloseIcon />}
              />,
            ]}
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
