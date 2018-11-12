import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Grid from '@material-ui/core/Grid'
import EditIcon from '@material-ui/icons/Edit'
import NumberFormat from 'react-number-format'
import Button from '@material-ui/core/Button'
import TimePicker from './TimePicker'

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
const Overtime = props => {
  const {
    onChange,
    onChangeOvertimeHours,
    onEdit,
    onBlur,
    isDisabled,
    onDiscard,
  } = props

  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item xs={6}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Ώρες υπερωρίας</FormLabel>
          <RadioGroup
            name="overtime hours"
            value={props.form.overtimeHours}
            onChange={onChangeOvertimeHours()}>
            <FormControlLabel value="1" control={<Radio />} label="1 ώρα" />
            <FormControlLabel value="2" control={<Radio />} label="2 ώρες" />
            <FormControlLabel value="3" control={<Radio />} label="3 ώρες" />
            <FormControlLabel value="4" control={<Radio />} label="4 ώρες" />
            <FormControlLabel value="5" control={<Radio />} label="5 ώρες" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Ώρα Έναρξης"
          value={props.form.startHour}
          onChange={onChange('startHour')}
          onBlur={onBlur('startHour')}
          margin="normal"
          fullWidth
          disabled={isDisabled.startHour}
          InputProps={{
            inputComponent: TimeFormat,
            endAdornment: isDisabled.startHour ? (
              <InputAdornment variant="filled" position="end">
                <IconButton
                  onClick={onEdit('startHour')}
                  children={<EditIcon />}
                />
              </InputAdornment>
            ) : null,
          }}
        />
        <TextField
          label="Ώρα Λήξης"
          value={props.form.finishHour}
          onChange={onChange('finishHour')}
          onBlur={onBlur('finishHour')}
          margin="normal"
          fullWidth
          disabled={isDisabled.finishHour}
          InputProps={{
            inputComponent: TimeFormat,
            endAdornment: isDisabled.finishHour ? (
              <InputAdornment variant="filled" position="end">
                <IconButton
                  onClick={onEdit('finishHour')}
                  children={<EditIcon />}
                />
              </InputAdornment>
            ) : null,
          }}
        />
        <TimePicker />
      </Grid>
      <Grid item xs={5}>
        <Button variant="extendedFab" color="secondary" onClick={onDiscard}>
          ΑΚΥΡΩΣΗ ΠΡΟΗΓΟΥΜΕΝΗΣ
        </Button>
      </Grid>
    </Grid>
  )
}

export default Overtime
