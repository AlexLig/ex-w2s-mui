import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'

class E4form extends Component {
  state = {
    afmEmployer: '',
    ameEmployer: '',
    afmEmployee: '',
    date: '',
    hourRange: '',
    reason: '',
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
        <Button 
          variant="outlined" 
          type="Submit"
        >
          Submit
        </Button>
      </form>
    )
  }
}

export default E4form
