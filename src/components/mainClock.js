import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    height: '900px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'hidden',
    // background: `url('https://i.pinimg.com/originals/f6/15/74/f615740d8ec75ad36e322ecd9da8b129.gif')`,
  },
}));

export default function MainClock() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Input />
    </div>
  );
}