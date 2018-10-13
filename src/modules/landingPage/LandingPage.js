import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { welcomes } from '../../data/languages';
import LanguageSelector from './LanguageSelector';
import MapBackground from './MapBackground';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';

const styles = (theme) => ({
  root: {
    height: '100%',
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 4,
  },
  contentContainer: {
    height: '100%',
    textAlign: 'center',
    maxWidth: 480,
  },
  titleContainer: {
    height: '20%',
  },
  languageSelectorContainer: {
    height: '80%',
  },
  subtitle: {
    marginTop: theme.spacing.unit / 4,
    marginBottom: theme.spacing.unit * 2,
  },
})

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      welcome: welcomes[1],
    }

    this.setWelcome = this.setWelcome.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.setWelcome, 5000);
  }

  componentWillUnMount() {
    clearInterval(this.interval);
  }

  setWelcome() {
    const length = welcomes.length;
    const welcomeIndex = Math.floor(Math.random()*length);
    const welcome = welcomes[welcomeIndex];

    this.setState({
      welcome
    })
  }

  render() {
    const { classes, t } = this.props;
    const { welcome } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.contentContainer}>
          <div className={classes.titleContainer}>
            <Typography variant="h4">{welcome}</Typography>
            <Typography className={classes.subtitle} variant="subtitle1">{t('langselect')}</Typography>
          </div>
          <div className={classes.languageSelectorContainer}>
            <LanguageSelector />
          </div>
        </div>
        <MapBackground />
      </div>
    )
  }
}

export default withStyles(styles)(withNamespaces('translation')(LandingPage))
