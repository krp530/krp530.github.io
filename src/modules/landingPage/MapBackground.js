import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  map: {
    backgroundColor: theme.palette.grey[300],
    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")',
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'repeat',
    height: '100vh',
    width: '200%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.33,
    animation: 'rotate-map infinite 120s linear',
    willChange: 'background-position',
  },
  '@keyframes rotate-map': {
    from: {backgroundPosition: 0},
    to: {backgroundPosition: '1200%'}
  }
})

const MapBackground = ({classes}) => <div className={classes.map}></div>

export default withStyles(styles)(MapBackground)
