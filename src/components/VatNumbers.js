import React, { Fragment } from 'react'
import { TextField } from '@material-ui/core'

const VatNumbers = props => {
  const {
    onChange,
    form: { afmEmployer, ameEmployer, afmEmployee },
    errors: {afmEmployerError, ameEmployerError, afmEmployeeError}
  } = props
  
  return (
    <Fragment>
      <TextField
        id="afm-employer"
        label="ΑΦΜ Εργοδότη"
        value={afmEmployer}
        onChange={onChange('afmEmployer')}
        error = {afmEmployerError}
        margin="normal"
        variant="outlined"
      />
      <br />
      <TextField
        id="ame-employer"
        label="ΑΜΕ Εργοδότη"
        value={ameEmployer}
        onChange={onChange('ameEmployer')}
        error = {ameEmployerError}
        margin="normal"
        variant="outlined"
      />
      <br />
      <TextField
        id="afm-employee"
        label="ΑΦΜ Εργαζομένου"
        value={afmEmployee}
        onChange={onChange('afmEmployee')}
        error = {afmEmployeeError}
        margin="normal"
        variant="outlined"
      />
    </Fragment>
  )
}

export default VatNumbers
