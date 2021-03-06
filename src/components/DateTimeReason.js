import React from 'react'
import  Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import NumberFormat from 'react-number-format'

function DateFormat(props) {
  const { onChange, ...other } = props

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
  const { onChange, ...other } = props

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
  const { reasons, onChange, onAddDateTimeReason } = props

  return (
      <Grid container justify="center" spacing={16} alignItems="center">
        <Grid item xs={12}>
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
        </Grid>
        <Grid item sm={3} xs={6}>
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
        </Grid>
        <Grid item sm={3} xs={6}>
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
        </Grid>

        <Grid item sm={6}  xs={12}>
          <TextField
            select
            label="Αιτιολογία"
            // helperText="Επιλέξτε αιτιολογία"
            value={props.form.isWork}
            onChange={onChange('isWork')}
            margin="normal"
            fullWidth
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
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={onAddDateTimeReason}>
            ΠΡΟΣΘΗΚΗ
          </Button>
        </Grid>
      </Grid>
    
  )
}

export default DateTimeReason
