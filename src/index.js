import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store, { history } from './store'
import App from './App'
import React from 'react'
import registerServiceWorker from './registerServiceWorker';
import './i18n';

const target = document.querySelector('#root');
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#100898',
    },
  },
  typography: {
    fontFamily: "\"Muli\", \"Helvetica\", \"Arial\", sans-serif",
  },
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target
)


registerServiceWorker();
