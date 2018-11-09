import React, { Fragment } from 'react'
import { TextField } from '@material-ui/core'

const VatNumbers = props => {
  const {
    onChange,
    onBlur,
    form: { afmEmployer, ameEmployer, afmEmployee },
    isValid,
    isTouched,
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
      />
    </Fragment>
  )
}

export default VatNumbers
