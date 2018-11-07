import React, {Fragment} from 'react'

import { Button, TextField, MenuItem } from '@material-ui/core'

const DateTimeReason = props => {

  const { reasons, classes, onChange, onAddDateTimeReason } = props

  return (
    <Fragment>
      <TextField
        label="date"
        value={props.form.date}
        onChange={onChange('date')}
        margin="normal"
        fullWidth
      />
      <TextField
        label="start"
        value={props.form.start}
        onChange={onChange('start')}
        margin="normal"
        fullWidth
      />
      <TextField
        label="finish"
        value={props.form.finish}
        onChange={onChange('finish')}
        margin="normal"
        fullWidth
      />
      <TextField
        select
        label="Αιτιολογία"
        helperText="Επιλέξτε αιτιολογία"
        value={props.form.isWork}
        onChange={onChange('isWork')}
        margin="normal"
        fullWidth
        SelectProps={{
            MenuProps: {
              className: classes.menu,
              // style: {width: 200}
            },      
        }}
      >
      {reasons.map(option => (
        <MenuItem key={option.key} value={option.value} >
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
