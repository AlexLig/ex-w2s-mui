import React, { Fragment } from 'react'
import { TextField, InputAdornment, IconButton, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import NumberFormat from 'react-number-format'

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
  const { onChange, onChangeOvertimeHours, onEdit, onBlur, isDisabled } = props

  return (
    <Fragment>

      <FormControl component="fieldset" >
        <FormLabel component="legend">Ώρες υπερωρίας</FormLabel>
        <RadioGroup
          name="overtime hours"
          value={props.form.overtimeHours}
          onChange={onChangeOvertimeHours()}
        >
          <FormControlLabel value="100" control={<Radio />} label="1 ώρα" />
          <FormControlLabel value="200" control={<Radio />} label="2 ώρες" />
          <FormControlLabel value="300" control={<Radio />} label="3 ώρες" />
          <FormControlLabel value="400" control={<Radio />} label="4 ώρες" />
          <FormControlLabel value="500" control={<Radio />} label="5 ώρες" />
        </RadioGroup>
      </FormControl>

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
    </Fragment>
  )
}

export default Overtime
