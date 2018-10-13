import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TranslateIcon from '@material-ui/icons/Translate';
import languages from '../../data/languages';
import _map from 'lodash/map';

const styles = (theme) => ({
  root: {
    height: '100%',
  },
})

class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: languages[0],
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
      <Paper>
        <TextField
          select
          value={language}
          onChange={this.handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start"><TranslateIcon /></InputAdornment>,
          }}
        >
          {
            _map(languages, (language) => (
              <MenuItem key={language} value={language}>{language}</MenuItem>
            ))
          }
        </TextField>
      </Paper>
    )
  }
}

export default withStyles(styles)(LanguageSelector)
