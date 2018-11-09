import React, { Fragment } from 'react'
import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

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
    <Fragment>
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
        variant="outlined"
        disabled={isDisabled.afmEmployer}
        InputProps={{
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

      <br />
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
        disabled={isDisabled.ameEmployer}
        InputProps={{
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
      <br />
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
        disabled={isDisabled.afmEmployee}
        InputProps={{
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
    </Fragment>
  )
}

export default VatNumbers
