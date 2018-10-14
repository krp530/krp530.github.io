import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepIcon from '@material-ui/core/StepIcon';
import StepContent from '@material-ui/core/StepContent';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';

import './JobResults.css'

const styles = (theme) => ({
  jobResultsRoot: {
    marginTop: "30px"
  },
  subSteps:{
    marginLeft: "30px"
  }
})

const getSteps = (steps) => steps.map((stp)=>stp.title)

const getStepContent = (steps, indx) => steps[indx].subSteps

class JobResults extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const {  classes } = this.props;
    const steps = getSteps(this.props.steps);
    const { activeStep } = this.state;
    if(steps.length == 0) return <h3>No data was found.</h3>

    return (
      <div className={classes.root}>
          <Stepper orientation="vertical" className="jobStuffStps">
          {steps.map((label, index) => {
            return (
              <Step className="subStps" active={false} key={label}>
                <StepIcon icon="" className="stpIcn"/>
                <StepLabel>{label}</StepLabel>

              <StepConnector className="stepConeeeeeeeeeeeeect"/>

                <div className={classes.subSteps}>
                  {getStepContent(this.props.steps, index).map((lbl)=> <Button color="primary" className="substpbtn">- {lbl}</Button>)}
                </div>

              </Step>
            );
          })}
        </Stepper>

      </div>
    );
  }
}

JobResults.propTypes = {
  steps: PropTypes.array.isRequired
}


export default withStyles(styles)(withNamespaces('translation')(JobResults))
