import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SchoolIcon from '@material-ui/icons/School';
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
    color: theme.palette.primary.main,
  },
  readMore: {
    color: theme.palette.primary.main,
  },
  plus: {
    fontSize: 18,
    paddingBottom: theme.spacing.unit / 2,
    paddingLeft: theme.spacing.unit / 4,
    display: 'inline-block',
  },
  education: {
    background: theme.palette.grey[100],
    marginTop: theme.spacing.unit * 3,
    marginLeft: -theme.spacing.unit * 4.5,
    paddingLeft: theme.spacing.unit * 4.5,
    zIndex: -1,
    position: 'relative',
  },
  educationTitle: {
    color: theme.palette.primary.main,
    fontSize: 32,
    fontFamily: theme.typography.fontFamily,
    display: 'flex',
    alignContent: 'center',
  },
  ed: {
    display: 'inline-block',
  },
  educationIcon: {
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit,
    width: 48,
    height: 48,

  }
})

class JobDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      short: true,
    }

    this.job = _find(data, {id: this.props.match.params.id}) || {};

    this.getNextJobs = this.getNextJobs.bind(this);
    this.getNextLevel = this.getNextLevel.bind(this);
    this.getDesc = this.getDesc.bind(this);
    this.toggleDesc = this.toggleDesc.bind(this);
  }

  toggleDesc() {
    this.setState({
      short: !this.state.short,
    });
  }

  getNextJobs() {
    const { match } = this.props;
    const { category, id } = match.params;
    const availableJobs = _filter(data, { category });

    return _groupBy(availableJobs, 'level');
  }

  getNextLevel() {
    const currentLevel = this.job.level;

    console.log(currentLevel)

    switch(currentLevel) {
      case 'entry': {
        return 'nextIntermediate';
      }
      case 'intermediate': {
        return 'nextSenior';
      }
      default: return;
    }
  }

  getDesc() {
    const { t } = this.props;
    const { short } = this.state;
    const fullDesc = t(`${this.job.id}.description`);
    const shortDesc = fullDesc.substring(0, 150);

    if (!short || fullDesc.length + 4 === shortDesc.length) {
      return fullDesc;
    }

    return shortDesc + '...';
  }

  render() {
    const { short } = this.state;
    const { classes, match, t } = this.props;
    const { category, id } = match.params;

    return (
      <div className={classes.root}>
        <Page>
          <div className={classes.section}>
            <div className={classes.dot}></div>
            <Typography className={classes.title} variant="title">{t(`${id}.title`)}</Typography>
            <Typography variant="body2" paragraph>{this.getDesc()}</Typography>
            <Grid container>
              {
                short &&
                <Grid item xs={6}>
                  <Button
                    onClick={this.toggleDesc}
                    fullWidth
                    className={classes.readMore}
                  >
                    {t('readMore')}
                    <span className={classes.plus}>+</span>
                  </Button>
                </Grid>
              }
              <Grid item xs={6}>
                <Button
                  fullWidth
                  component="a"
                  href={this.job.listings}
                  target="_blank"
                  color="primary"
                  variant="contained"
                >
                  {t('findJobs')}
                </Button>
              </Grid>
            </Grid>

            <div className={classes.education}>
              <div className={classes.educationTitle}>
                <SchoolIcon className={classes.educationIcon} />
                <span className={classes.ed}>{t('education')}</span>
              </div>
              <Typography variant="body2" paragraph>
                {t(`${this.job.id}.education`)}
              </Typography>
            </div>
          </div>
          {
            this.getNextJobs() && <div className={classes.section}>
                <div className={classes.dot}></div>
                <Typography variant="title">{t(`${id}.title`)}</Typography>
                <Typography variant="title">{t(this.getNextLevel())}</Typography>          
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
