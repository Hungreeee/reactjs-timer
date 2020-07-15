import React from "react";
import { useRef } from 'react';
import Countdown, { zeroPad } from "react-countdown";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

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
        <h1>
          TIME UP
        </h1>
      </div>
    )
  }
  else {
    return (
      <div>
        <br />
        <h1>
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </h1>
      </div>
    );
  }
};


export default function FullClock(props) {
  const clockRef = useRef();
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
    <div>
      <Timer refCallback={clockRef} total={total} />
      <Button
        variant='contained'
        color='primary'
        type='submit'
        onClick={handleStart}
      >
        RESUME
      </Button>
      <Button
        variant="contained"
        color='secondary'
        type='submit'
        onClick={handlePause}
      >
        PAUSE
      </Button>
    </div >
  );
}