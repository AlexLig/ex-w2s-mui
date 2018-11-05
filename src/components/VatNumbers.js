import React, { Fragment } from 'react'
import { TextField } from '@material-ui/core'

const VatNumbers = props => {
  const {
    onChange,
    form: { afmEmployer, ameEmployer, afmEmployee },
  } = props

  return (
    <Fragment>
      <TextField
        id="afm-employer"
        label="ΑΦΜ Εργοδότη"
        value={afmEmployer}
        onChange={onChange('afmEmployer')}
        margin="normal"
        variant="outlined"
      />
      <br />
      <TextField
        id="ame-employer"
        label="ΑΜΕ Εργοδότη"
        value={ameEmployer}
        onChange={onChange('ameEmployer')}
        margin="normal"
        variant="outlined"
      />
      <br />
      <TextField
        id="afm-employee"
        label="ΑΦΜ Εργαζομένου"
        value={afmEmployee}
        onChange={onChange('afmEmployee')}
        margin="normal"
        variant="outlined"
      />
    </Fragment>
  )
}

export default VatNumbers
