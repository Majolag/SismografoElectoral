import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TwitterIcon from '@material-ui/icons/Twitter';
import barra from './../images/barra.png';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  socialN:{
      marginTop: '34px',
      marginLeft: '300px'
  },
  imgSize:{
      height: '500px'
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
      <div className={classes.socialN}>
            <img src={barra} className={classes.imgSize} />
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      
    >
      <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
      <BottomNavigationAction label="All" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
    </BottomNavigation>
    </div>
  );
}
