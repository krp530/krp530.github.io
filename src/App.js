import { Switch, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
// import About from './containers/About';
// import Counter from './containers/Counter';
// import Todo from './containers/Todo';
// import Home from './containers/Home';
import React, { Component } from 'react';
import Reference from './modules/reference/Reference';
import LandingPage from './modules/landingPage/LandingPage';
import AppBar from './modules/AppBar';
import logo from './logo.svg';
import './App.css';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';

const styles = (theme) => ({
  root: {
    paddingTop: theme.spacing.unit * 7
  },
})

class App extends Component {
  constructor(props) {
    super(props)

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(lng) {
    const { i18n } = this.props;

    i18n.changeLanguage(lng);
  }

  render() {
    const { classes, t } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" changeLanguage={this.changeLanguage} />
        <Trans i18nKey="description.part1">
          This one has <b>special rich-text formatting</b> in the translation file!
        </Trans>

        <Switch>
          <Route exact path="/" render={() => <LandingPage t={t} />} />
        </Switch>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{t('title')}</h1>
        </header>
        <div className="Links">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/todo">Todo</Link>
        </div>

        <main>
          <Route exact path="/" render={props => <Home {...this.props} />} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/todo" component={Todo} />
        </main>
        <Reference /> */}
      </div>
    );
  }
}

export default withStyles(styles)(withNamespaces('translation')(App));
