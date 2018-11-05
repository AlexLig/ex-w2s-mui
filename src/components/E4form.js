import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import E4parser from './Displayer'

class E4form extends Component {
  state = {
    afmEmployer: '',
    ameEmployer: '',
    afmEmployee: '',
    dateTimeReason: []
  }
  addDateTimeReason = dateTimeReason => {
    this.setState({
      dateTimeReason: [...this.state.dateTimeReason, dateTimeReason]
    })
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }
  handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
        <TextField
          id="afm-employer"
          label="ΑΦΜ Εργοδότη"
          value={this.state.name}
          onChange={this.handleChange('afmEmployer')}
          margin="normal"
          variant="outlined"
        />
        <br/>
        <TextField
          id="ame-employer"
          label="ΑΜΕ Εργοδότη"
          value={this.state.name}
          onChange={this.handleChange('ameEmployer')}
          margin="normal"
          variant="outlined"
        />
        <br/>
        <TextField
          id="afm-employee"
          label="ΑΦΜ Εργαζομένου"
          value={this.state.name}
          onChange={this.handleChange('afmEmployee')}
          margin="normal"
          variant="outlined"
        />
        <br/>
        <E4parser/>

        <br/>
        <Button 
          variant="outlined" 
          type="Submit"
        >
          ΥΠΟΒΟΛΗ
        </Button>
      </form>
    )
  }
}

export default E4form
