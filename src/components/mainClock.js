import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input'

const useStyles = makeStyles((theme) => ({

}));

export default function MainClock() {
  const classes = useStyles();
  return (
    <div>
      <Input />
    </div>
  );
}