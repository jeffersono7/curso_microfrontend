import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 20,
  },
  title: {
    fontSize: 14,
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Transferencias
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Nova transferência</Button>
      </CardActions>
    </Card>
  );
}
