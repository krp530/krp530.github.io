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
    position: 'relative',
  },
  question: {
    padding: theme.spacing.unit * 2,
    fontSize: 28,
    fontWeight: 300,
    textAlign: 'center',
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  yes: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  no: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
})

class Question extends React.Component {
  render() {
    const { answerQuestion, classes, question, t } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.question} color="inherit">{t(question.question)}</Typography>
        <Grid className={classes.actions} container>
          <Grid item xs={6} className={classes.yes}>
            <IconButton onClick={answerQuestion(question, true)} size="large" color="inherit">
              <CheckIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} className={classes.no}>
            <IconButton onClick={answerQuestion(question, false)} size="large" color="inherit">
              <CancelIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Question);