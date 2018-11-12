import React from 'react'
import E4 from './components/E4'

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
// import SwipeableViews from 'react-swipeable-views'
import E8 from './components/E8/E8'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const forms = [
  {
    label: 'Ε8 - Αναγγελία Υπερεργασίας ή Νόμιμης Υπερωριακής Απασχόλησης',
    form: <E8 />,
  },
  {
    label: 'Ε4 - Συμπληρωματικής Ωραρίου',
    form: <E4 />,
  },
]

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
})

class App extends React.Component {
  state = {
    activeStep: 0,
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }))
  }

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }))
  }

  handleStepChange = activeStep => {
    this.setState({ activeStep })
  }

  render() {
    const { classes, theme } = this.props
    const { activeStep } = this.state
    const maxSteps = forms.length
    return (
      <Grid container justify="center">
        <Grid item xs={10} md={8} lg={5} style={{ maxWidth: 500 }}>
          <Paper
            elevation={2}
            style={{
              padding: '1rem',
              marginTop: '1rem',
            }}>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.mobileStepper}
              nextButton={
                <Button
                  size="small"
                  onClick={this.handleNext}
                  disabled={activeStep === maxSteps - 1}>
                  Next
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={this.handleBack}
                  disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
            <Typography style={{textAlign: "center"}}>{forms[activeStep].label}</Typography>
            <div>
              {forms[activeStep].form}
            </div>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles, { withTheme: true })(App)
