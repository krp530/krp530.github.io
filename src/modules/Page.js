import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 4,
  }
})

class Page extends React.Component {
  render() {
    const { children, classes, style } = this.props;

    return (
      <div className={classes.root} style={style}>{children}</div>
    )
  }
}

export default withStyles(styles)(Page);
