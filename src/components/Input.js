import React from "react";
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FullClock from './ClockEngine'

const useStyles = makeStyles((theme) => ({

}));

export default function Input() {
  const classes = useStyles();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTotal((parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second)) * 1000);
  }

  return (
    <form
      className={classes.inputForm}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Hour"
        variant="outlined"
        onChange={e => setHour(e.target.value)}
      />
      <span> : </span>
      <TextField
        id="outlined-basic"
        label="Minute"
        variant="outlined"
        onChange={e => setMinute(e.target.value)}
      />
      <span> : </span>
      <TextField
        id="outlined-basic"
        label="Second"
        variant="outlined"
        onChange={e => setSecond(e.target.value)}
      />

      <Button
        variant="contained"
        color='primary'
        type='submit'
      >
        START
      </Button>

      <FullClock total={total} />

    </form >
  );
}

