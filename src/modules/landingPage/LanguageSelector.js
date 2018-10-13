import React from 'react';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import TranslateIcon from '@material-ui/icons/Translate';
import { languageNames } from '../../data/languages';
import _map from 'lodash/map';

const styles = (theme) => ({
  root: {
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    background: 'rgba(255, 255, 255, .5)',
  },
})

class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: languageNames[0],
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      language: evt.target.value,
    })
  }

  render() {
    const { classes } = this.props;
    const { language } = this.state;

    return (
      <Paper className={classes.root}>
        <List>
          {
            _map(languageNames, (language) => (
              <ListItem button to='/step1' component={Link} key={language} value={language}>{language}</ListItem>
            ))
          }
        </List>
      </Paper>
    )
  }
}

export default withStyles(styles)(LanguageSelector)
