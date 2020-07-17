import React from "react";
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { Button, Grid, Avatar } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';

import FullClock from './ClockEngine'

const useStyles = makeStyles((theme) => ({
  inputField: {
  },
  startButton: {
    borderRadius: '30px',
    border: '1px solid transparent',
    fontSize: '17px',
    padding: '10px 50px 10px 50px',
    '&:hover': {
      transition: '.5s',
      border: '1px solid #000000',
      background: 'white',
      color: '#000000',
    },
  },
  resetButton: {
    borderRadius: '0px',
    border: '1px solid transparent',
    width: '100px',
    height: '40px',
    margin: '0',
    '&:hover': {
      transition: '.5s',
      border: '1px solid #000000',
      background: 'white',
      color: '#000000',
    },
  },
}));

export default function Input() {
  const classes = useStyles();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [total, setTotal] = useState(0);
  const [showRes, setShowRes] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTotal((parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second)) * 1000);
  }

  const handleHide = () => {
    setShowRes(false)
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <form
      className={classes.inputForm}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      style={{ width: '100%' }}
    >
      <Grid container
        justify='center'
        alignContent='center'
        alignItems='center'
        direction='column'
        spacing={3}

      >{showRes ?

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <h1 style={{ margin: '0' }}> COUNT DOWN TIMER </h1>
            </Grid>
            <Grid item>
              <h4 style={{ margin: '0' }}> made by MyNameIsHung </h4>
            </Grid>
            <Grid item>
              <a href='https://github.com/MyNameIsHung' target='_blank' rel="noopener noreferrer">
                <Avatar alt="Remy Sharp" src="https://image.flaticon.com/icons/png/512/37/37318.png" />
              </a>
            </Grid>
          </Grid>
          <Grid container
            alignContent='center'
            alignItems='center'
            direction='row'
            justify='center'
            spacing={1}
          >
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Hour"
                variant="outlined"
                onChange={e => setHour(e.target.value)}
                type='number'
                className={classes.inputField}
              />
            </Grid>
            <Grid item>
              <h2> : </h2>
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Minute"
                variant="outlined"
                onChange={e => setMinute(e.target.value)}
                className={classes.inputField}
                type='number'
              />
            </Grid>
            <Grid item>
              <h2> : </h2>
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Second"
                variant="outlined"
                onChange={e => setSecond(e.target.value)}
                className={classes.inputField}
                type='number'
              />
            </Grid>
          </Grid>
        </Grid>

        : null}

        {showRes ? null :
          <Grid item style={{ width: '100%' }} xs={12}>
            <FullClock total={total} />
          </Grid>
        }
        {showRes ?

          <Grid item xs={12}>
            <Button
              className={classes.startButton}
              variant="contained"
              color='primary'
              type='submit'
              onClick={handleHide}
            >
              START
          </Button>
          </Grid>

          :

          <Grid item xs={12}>
            <Button
              className={classes.resetButton}
              variant="contained"
              color='primary'
              type='submit'
              onClick={refreshPage}
              startIcon={<RestoreIcon />}
            >
              RESET
              </Button>
          </Grid>

        }
      </Grid>
    </form >
  );
}

