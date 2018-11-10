import React, { Fragment } from 'react'
import { Button, TextField, MenuItem } from '@material-ui/core'
import NumberFormat from 'react-number-format'

function DateFormat(props) {
  const {onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      format="##/##/20##"
      placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"
      mask={'_'}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        })
      }}
    />
  )
}

function TimeFormat(props) {
  const {onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      format="##:##"
      placeholder="ΩΩ:ΛΛ"

      mask={'_'}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        })
      }}
    />
  )
}

const DateTimeReason = props => {
  const { reasons, classes, onChange, onAddDateTimeReason } = props

  return (
    <Fragment>
      <TextField
        label="Ημερομηνία"
        value={props.form.date}
        onChange={onChange('date')}
        margin="normal"
        fullWidth
        InputProps={{
          inputComponent: DateFormat,
        }}
      />
      <TextField
        label="Ώρα Έναρξης"
        value={props.form.start}
        onChange={onChange('start')}
        margin="normal"
        fullWidth
        InputProps={{
          inputComponent: TimeFormat,
        }}
      />
      <TextField
        label="Ώρα Λήξης"
        value={props.form.finish}
        onChange={onChange('finish')}
        margin="normal"
        fullWidth
        InputProps={{
          inputComponent: TimeFormat,
        }}
      />
      <TextField
        select
        label="Αιτιολογία"
        helperText="Επιλέξτε αιτιολογία"
        value={props.form.isWork}
        onChange={onChange('isWork')}
        margin="normal"
        // fullWidth
        SelectProps={{
          MenuProps: {
            // className: classes.menu,
            // style: {width: 200}
          },
        }}>
        {reasons.map(option => (
          <MenuItem key={option.key} value={option.value}>
            {option.key}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="outlined" onClick={onAddDateTimeReason}>
        addDate
      </Button>
    </Fragment>
  )
}

export default DateTimeReason
