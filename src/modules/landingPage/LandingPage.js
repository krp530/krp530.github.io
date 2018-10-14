import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import _find from 'lodash/find';
import _map from 'lodash/map';
import _concat from 'lodash/concat';
import { welcomes } from '../../data/languages';
import Page from '../Page';
import Question from '../Question';
import MapBackground from './MapBackground';
import qData from '../../data/questions';

const styles = (theme) => ({
  root: {
    height: '100%',
    overflow: 'hidden',
  },
  contentContainer: {
    height: '100%',
    textAlign: 'center',
    maxWidth: 480,
    transition: 'transform .3s ease-in-out',
  },
  start: {
    margin: `${theme.spacing.unit * 4}px auto`,
  },
  options: {
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
      welcome: welcomes[0],
      questions: [qData[0]],
      top: 0,
    }

    this.setWelcome = this.setWelcome.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
    this.movePage = this.movePage.bind(this);
  }

  componentDidMount() { this.interval = setInterval(this.setWelcome, 5000); }

  componentWillUnMount() { clearInterval(this.interval); }

  setWelcome() {
    const length = welcomes.length;
    const welcomeIndex = Math.floor(Math.random()*length);
    const welcome = welcomes[welcomeIndex];

    this.setState({
      welcome
    })
  }

  answerQuestion(_question, answer) {
    return () => {
      const { questions } = this.state;
      const question = _find(qData, { question: answer ? _question.yes : _question.no });
      const length = questions.length;
      
      questions[length - 1].answer = answer;

      this.movePage('up')();

      if (!question) {
        return // all done, show categories or whatever
      }

      this.setState({
        questions: _concat(questions, [question]),
      })
    }
  }

  movePage(direction) {
    return () => {
      const { top } = this.state;
      if (direction === "up") {
        this.setState({
          top: top - window.innerHeight + 56,
        })
      } else {
        this.setState({
          top: top + window.innerHeight - 56,
        })
      }
    }
  }

  render() {
    const { classes, t } = this.props;
    const { top, welcome, questions } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.contentContainer} style={{transform: `translateY(${top}px)`}}>
          <Page>
            <div className={classes.titleContainer}>
              <Typography variant="h3">{welcome}</Typography>
              <Typography variant="h6">{t('Finding the Right Job')}</Typography>
            </div>

            <Button
              className={classes.start}
              color="primary"
              onClick={this.movePage('up')}
              variant="contained"
            >
              {t('start')}
            </Button>
          </Page>
          
          {
            _map(questions, (question) => (
              <Page key={question.question} style={{ padding: 0 }}>
                <Question
                  answerQuestion={this.answerQuestion}
                  t={t}
                  question={question}
                />
              </Page>
            ))
          }

          <Page>
            <Typography align="center" paragraph variant="h4">{t('categoriesTitle')}</Typography>
            <Grid container spacing={16} className={classes.options}>
              <Grid item xs={6}>
                <Button
                  component={Link}
                  to="/technology"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Technology
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  component={Link}
                  to="/medical"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Medical
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  component={Link}
                  to="/labor"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Labor
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  component={Link}
                  to="/creative"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Creative
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  component={Link}
                  to="/teaching"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Teaching
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  component={Link}
                  to="/engineering"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Engineering
                </Button>
              </Grid>
            </Grid>
          </Page>

        </div>
        <MapBackground />
      </div>
    )
  }
}

export default withStyles(styles)(withNamespaces('translation')(LandingPage))
