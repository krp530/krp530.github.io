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
  section: {
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

class JobDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.job = _find(data, {id: this.props.match.params.id}) || {};

    this.getNextJobs = this.getNextJobs.bind(this);
    this.getNextLevel = this.getNextLevel.bind(this);
    this.getShortDesc = this.getShortDesc.bind(this);
  }

  getNextJobs() {
    const { match } = this.props;
    const { category, id } = match.params;
    const availableJobs = _filter(data, { category });

    return _groupBy(availableJobs, 'level');
  }

  getNextLevel() {
    const currentLevel = this.job.level;

    switch(currentLevel) {
      case 'Entry': {
        return 'Intermediate';
      }
      case 'Intermediate': {
        return 'Senior';
      }
      default: return;
    }
  }

  getShortDesc() {
    const { t } = this.props;
    const fullDesc = t(`${this.job.id}.description`);
    const shortDesc = fullDesc.substring(0, 150);

    if (fullDesc.length + 4 === shortDesc.length) {
      return fullDesc;
    }

    return shortDesc + '...';
  }

  render() {
    const { classes, match, t } = this.props;
    const { category, id } = match.params;

    return (
      <div className={classes.root}>
        <Page>
          <div className={classes.section}>
            <div className={classes.dot}></div>
            <Typography variant="title">{t(`${id}.title`)}</Typography>
            <Typography variant="body2">{this.getShortDesc()}</Typography>
            <Button>{t('readMore')}</Button>
          </div>
          {
            this.getNextJobs() && <div className={classes.section}>
                <div className={classes.dot}></div>
                <Typography variant="title">{t(`${id}.title`)}</Typography>
            </div>
          }
          <Button component="a" href={this.job.listings} target="_blank" color="primary" variant="contained">{t('findJobs')}</Button>
        </Page>
      </div>
    )
  }
}

// title
// description
// education
// requirements

export default withStyles(styles)(withNamespaces('translation')(JobDetail))
