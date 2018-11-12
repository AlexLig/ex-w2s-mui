import React from 'react'

import EditIcon from '@material-ui/icons/Edit'
import NumberFormat from 'react-number-format'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

function AfmFormat(props) {
  const { onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      format="#########"
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
function AmeFormat(props) {
  const { onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      format="##########"
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

const VatNumbers = props => {
  const {
    onChange,
    onBlur,
    onEdit,
    form: { afmEmployer, ameEmployer, afmEmployee },
    isValid,
    isTouched,
    isDisabled,
  } = props

  return (
    <Grid container spacing={16} alignContent="flex-start" justify="center">
      <Grid item sm={6} xs={12}>
        <TextField
          label="ΑΦΜ Εργοδότη"
          value={afmEmployer}
          onChange={onChange('afmEmployer')}
          onBlur={onBlur('afmEmployer')}
          error={isTouched.afmEmployer ? !isValid.afmEmployer : false}
          helperText={
            isTouched.afmEmployer && !isValid.afmEmployer
              ? 'Προσθέστε 9 αριθμούς'
              : ''
          }
          margin="normal"
          fullWidth
          variant="outlined"
          disabled={isDisabled.afmEmployer}
          InputProps={{
            inputComponent: AfmFormat,
            endAdornment: isDisabled.afmEmployer ? (
              <InputAdornment variant="filled" position="end">
                <IconButton
                  onClick={onEdit('afmEmployer')}
                  children={<EditIcon />}
                />
              </InputAdornment>
            ) : null,
          }}
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <TextField
          label="ΑΜΕ Εργοδότη"
          value={ameEmployer}
          onChange={onChange('ameEmployer')}
          onBlur={onBlur('ameEmployer')}
          error={isTouched.ameEmployer ? !isValid.ameEmployer : false}
          helperText={
            isTouched.ameEmployer && !isValid.ameEmployer
              ? 'Προσθέστε 10 αριθμούς'
              : ''
          }
          margin="normal"
          variant="outlined"
          fullWidth
          disabled={isDisabled.ameEmployer}
          InputProps={{
            inputComponent: AmeFormat,
            endAdornment: isDisabled.ameEmployer ? (
              <InputAdornment variant="filled" position="end">
                <IconButton
                  onClick={onEdit('ameEmployer')}
                  children={<EditIcon />}
                />
              </InputAdornment>
            ) : null,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="afm-employee"
          label="ΑΦΜ Εργαζομένου"
          value={afmEmployee}
          onChange={onChange('afmEmployee')}
          onBlur={onBlur('afmEmployee')}
          error={isTouched.afmEmployee ? !isValid.afmEmployee : false}
          helperText={
            isTouched.afmEmployee && !isValid.afmEmployee
              ? 'Προσθέστε 9 αριθμούς'
              : ''
          }
          margin="normal"
          variant="outlined"
          fullWidth
          disabled={isDisabled.afmEmployee}
          InputProps={{
            inputComponent: AfmFormat,
            endAdornment: isDisabled.afmEmployee ? (
              <InputAdornment variant="filled" position="end">
                <IconButton
                  onClick={onEdit('afmEmployee')}
                  children={<EditIcon />}
                />
              </InputAdornment>
            ) : null,
          }}
        />
      </Grid>
    </Grid>
  )
}

export default VatNumbers
