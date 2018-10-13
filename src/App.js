import { Route, Link } from 'react-router-dom'
import About from './containers/About'
import Counter from './containers/Counter'
import Todo from './containers/Todo'
import Home from './containers/Home'
import React, { Component } from 'react';
import Reference from './modules/reference/Reference'
import logo from './logo.svg';
import './App.css';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';

class App extends Component {
  render() {
    console.log('11111', this.props)
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div className="App">
        <header className="App-header">
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
        <Reference />
      </div>
    );
  }
}

export default withNamespaces('translation')(App);
