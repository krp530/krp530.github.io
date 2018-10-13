import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/CheckCircleOutlined';
import CancelIcon from '@material-ui/icons/CancelOutlined';

const styles = (theme) => ({
  root: {
    background: theme.palette.primary.main,
    height: '100%',
    color: 'white',
  },
  question: {
    padding: theme.spacing.unit * 2,
    fontSize: 28,
    fontWeight: 300,
    textAlign: 'center',
  },
  actions: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  cancel: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
})

class Question extends React.Component {
  render() {
    const { classes, question } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.question} color="inherit">{question}</Typography>
        <Grid className={classes.actions} container>
          <Grid item xs={6}>
            <IconButton size="large" color="inherit">
              <CheckIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} className={classes.cancel}>
            <IconButton size="large" color="inherit">
              <CancelIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Question);