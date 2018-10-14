import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import _find from 'lodash/find';
import _map from 'lodash/map';
import _concat from 'lodash/concat';
import Page from './Page';
import JobResults from '../containers/JobResults';

const styles = (theme) => ({
  root: {
    height: '100%',
    overflow: 'hidden',
  },
})

class JobListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  render() {
    const { classes, t, steps, match } = this.props;
    console.log(match)
    // const {  } = this.state;

    return (
      <div className={classes.root}>
        <Page>
          {
            _map(steps, step => (
              <div key={step.title} className={classes.step}>
                <Typography>{step.title}</Typography>
                {
                  _map(step.subSteps, subStep => (
                    <div key={subStep}>{subStep}</div>
                  ))
                }
              </div>
            ))
          }
        </Page>
      </div>
    )
  }
}

JobListing.defaultProps = {
  steps: [
      {title: "title 1",
      subSteps:[
        "sub 1",
        "sub 2",
        "sub 3"
      ]},
      {title: "title 2",
      subSteps:[
        "sub 1",
        "sub 2",
        "sub 3"
      ]},
      {title: "and the 3!",
      subSteps:[
        "sub 1",
        "sub 2",
        "sub 3"
      ]}
    ]
}

export default withStyles(styles)(withNamespaces('translation')(JobListing))
