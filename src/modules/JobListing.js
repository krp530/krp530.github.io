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
import _filter from 'lodash/filter';
import _groupBy from 'lodash/groupBy';
import Page from './Page';
import JobResults from '../containers/JobResults';
import { data } from '../data/index';

const styles = (theme) => ({
  root: {
    height: '100%',
    overflow: 'hidden',
    maxWidth: 480,
    margin: '0 auto',
  },
  level: {
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    paddingLeft: theme.spacing.unit * 3,
    position: 'relative',
    '&:last-of-type': {
      border: 'none',
    },
  },
  dot: {
    content: ' ',
    width: 20,
    height: 20,
    borderRadius: '50%',
    display: 'block',
    background: theme.palette.grey[300],
    position: 'absolute',
    top: 0,
    left: -10,
  },
  link: {
    display: 'block',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    paddingLeft: theme.spacing.unit * 2,
    fontFamily: theme.typography.fontFamily,
    paddingTop: theme.spacing.unit * .5,
    paddingBottom: theme.spacing.unit * .5,
    '&:last-of-type': {
      paddingBottom: theme.spacing.unit * 2.5,
    },
  },
  title: {
    lineHeight: 1,
    margin: 0,
    padding: 0,
    paddingBottom: theme.spacing.unit,
  },
})

class JobListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
    
    this.getJobs = this.getJobs.bind(this);
  }

  getJobs() {
    const { match } = this.props;
    const { category } = match.params;
    const availableJobs = _filter(data, { category });

    return _groupBy(availableJobs, 'level');
  }

  render() {
    const { classes, match, t } = this.props;
    const { category } = match.params;

    return (
      <div className={classes.root}>
        <Page>
          {
            _map(this.getJobs(), (job, level) => (
              <div key={level} className={classes.level}>
                <div className={classes.dot}></div>
                <Typography className={classes.title} variant="title">{level} Level</Typography>
                {
                  _map(job, (_job, id) => (
                    <Link className={classes.link} to={`/${category}/${_job.id}`} key={_job.id}>- {t(`${_job.id}.title`)}</Link>
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
