import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import TranslateIcon from '@material-ui/icons/Translate';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import _map from 'lodash/map';
import { languages } from '../data/languages';

const styles = (theme) => ({

})

class AppBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      anchorEl: null,
    }

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  openMenu(evt) {
    this.setState({
      anchorEl: evt.target
    })
  }

  closeMenu() {
    this.setState({
      anchorEl: null
    })
  }

  handleLanguageChange(language) {
    return () => {
      console.log('switching to', language)
      this.props.changeLanguage(language);
      this.closeMenu();
    }
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    
    return (
      <React.Fragment>
        <MaterialAppBar>
          <Toolbar>
            <IconButton onClick={this.openMenu}>
              <TranslateIcon />
            </IconButton>
          </Toolbar>
        </MaterialAppBar>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.closeMenu}
        >
          {
            _map(languages, language => (
              <MenuItem key={language.value} onClick={this.handleLanguageChange(language.value)}>
                {language.label}
              </MenuItem>
            ))
          }
        </Menu>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(AppBar);
