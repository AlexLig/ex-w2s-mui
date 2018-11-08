import React, { Fragment } from 'react'
import { TextField } from '@material-ui/core'

const VatNumbers = props => {
  const {
    onChange,
    onBlur,
    form: { afmEmployer, ameEmployer, afmEmployee },
    errors
  } = props
  
  return (
    <Fragment>
      <TextField
        id="afm-employer"
        label="ΑΦΜ Εργοδότη"
        value={afmEmployer}
        onChange={onChange('afmEmployer')}
        onBlur= {onBlur('afmEmployer')}
        error={errors.afmEmployer}
        margin="normal"
        variant="outlined"
      />
      <br />
      <TextField
        id="ame-employer"
        label="ΑΜΕ Εργοδότη"
        value={ameEmployer}
        onChange={onChange('ameEmployer')}
        onBlur= {onBlur('ameEmployer')}
        error={errors.ameEmployer}
        margin="normal"
        variant="outlined"
      />
      <br />
      <TextField
        id="afm-employee"
        label="ΑΦΜ Εργαζομένου"
        value={afmEmployee}
        onChange={onChange('afmEmployee')}
        onBlur = {onBlur('afmEmployee')}
        error={errors.afmEmployee}
        margin="normal"
        variant="outlined"
      />
    </Fragment>
  )
}

export default VatNumbers
