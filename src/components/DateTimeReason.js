import React, {Fragment} from 'react'

import { Button, TextField } from '@material-ui/core'

const DateTimeReason = props => {

  const { onChange, onAddDateTimeReason } = props

  return (
    <Fragment>
      <TextField
        label="date"
        value={props.date}
        onChange={onChange('date')}
        margin="normal"
        fullWidth
      />
      <TextField
        label="start"
        value={props.start}
        onChange={onChange('start')}
        margin="normal"
        fullWidth
      />
      <TextField
        label="finish"
        value={props.finish}
        onChange={onChange('finish')}
        margin="normal"
        fullWidth
      />
      <TextField
        label="isWork"
        value={props.isWork}
        onChange={onChange('isWork')}
        margin="normal"
        fullWidth
      />

      <Button variant="outlined" onClick={onAddDateTimeReason}>
        addDate
      </Button>
    </Fragment>
  )
}

export default DateTimeReason
