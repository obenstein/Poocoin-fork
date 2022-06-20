import React from 'react';

import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inLineLink: {
    color: '#01efd7!important',
    overflowWrap: 'break-word',
    textAlign:"left"
  }
});

export default function InLineLink(props) {
  const fontSize = (props.fontSize ? props.fontSize : '16px');
  const classes = useStyles();
  return (
    <Link className={classes.inLineLink} href={props.url} style={{ fontSize: fontSize }}>
      {props.text}
    </Link>
  )
}