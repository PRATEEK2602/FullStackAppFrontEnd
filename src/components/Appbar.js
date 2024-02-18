import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Centering the text horizontally
    fontWeight: 'bold', // Making the text bold
    color: '#FFFF00', // Setting the light orange color
  },
  appBar: {
    backgroundImage: `url('https://i.etsystatic.com/34656703/r/il/ca5740/5353829314/il_600x600.5353829314_a0v1.jpg')`, // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.7, // Making the background image more transparent
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome to Biyah.com
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
