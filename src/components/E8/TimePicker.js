import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'

const TimePicker = props => {
  const { onChange, time } = props
  return (
    <Grid container spacing={8} alignItems="flex-end" justify="center">
      <Grid item>
        <FormControl>
          <InputLabel htmlFor="hour">Ώρες</InputLabel>
          <Select
            native
            value={time}
            onChange={() => onChange()}
            inputProps={{
              name: 'hour',
              id: 'hour',
            }}>
            {(() => {
              let hours = []
              for (let i = 0; i < 24; i++) {
                hours = [...hours, i.toString()]
              }
              return hours
                .map(el => (el.length === 1 ? '0' + el : el))
                .map(el => <option value={el}>{el}</option>)
            })()}
          </Select>
        </FormControl>
      </Grid>
      <Grid item style={{ paddingBottom: 10 }}>
        <span>:</span>
      </Grid>
      <Grid item>
        <FormControl>
          <InputLabel htmlFor="minutes">Λεπτά</InputLabel>
          <Select
            native
            value={time}
            onChange={() => onChange()}
            inputProps={{
              name: 'minutes',
              id: 'minutes',
            }}>
            {(() => {
              let minutes = []
              for (let i = 0; i < 60; i = i + 5) {
                minutes = [...minutes, i.toString()]
              }
              return minutes
                .map(el => (el.length === 1 ? '0' + el : el))
                .map(el => <option value={el}>{el}</option>)
            })()}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default TimePicker
