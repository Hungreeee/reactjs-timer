import React from "react";
import { useRef } from 'react';
import Countdown, { zeroPad } from "react-countdown";
import { makeStyles } from '@material-ui/core/styles';

import { Button, Grid } from '@material-ui/core';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: '150px',
  },
  resumeButton: {
    borderRadius: '0px',
    border: '1px solid transparent',
    width: '100px',
    height: '40px',
    margin: '0',
    '&:hover': {
      transition: '.5s',
      border: '1px solid #030065',
      background: 'white',
      color: '#030065',
    },
  },
  pauseButton: {
    borderRadius: '0px',
    border: '1px solid transparent',
    width: '100px',
    height: '40px',
    margin: '0',
    '&:hover': {
      transition: '.5s',
      border: '1px solid #650000',
      background: 'white',
      color: '#650000',
    },
  },
}));

function Timer(props) {
  const { refCallback, total } = props;

  return (
    <div>
      <Countdown
        date={Date.now() + total}
        renderer={rendererForTimer}
        ref={refCallback}
      />
    </div>
  );
}

const rendererForTimer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div>
        <h1 style={{ fontSize: '150px', margin: '0' }}>
          TIME UP
        </h1>
      </div>
    )
  }
  else {
    return (
      <div>
        <br />
        <h1 style={{ fontSize: '150px', margin: '0' }}>
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </h1>
      </div>
    );
  }
};


export default function FullClock(props) {
  const clockRef = useRef();
  const classes = useStyles();
  const { total } = props;
  const handleStart = () => {
    if (clockRef.current.isPaused()) {
      clockRef.current.start();
    }
  }
  const handlePause = () => {
    if (!clockRef.current.isPaused()) {
      clockRef.current.pause();
    }
  }
  return (
    <Grid container
      justify='center'
      alignItems='center'
      direction='column'
    >
      <Grid item>
        <Timer refCallback={clockRef} total={total} />
      </Grid>
      <Grid item>
        <Grid container
          spacing={2}
        >
          <Grid item>
            <Button
              className={classes.resumeButton}
              variant='contained'
              type='submit'
              onClick={handleStart}
              startIcon={<PlayArrowIcon />}
            >
              RESUME
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.pauseButton}
              variant="contained"
              color='secondary'
              type='submit'
              onClick={handlePause}
              startIcon={<PauseIcon />}
            >
              PAUSE
        </Button>
          </Grid >
        </Grid>
      </Grid>
    </Grid >
  );
}