import { makeStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  },

  nameShop: {
    flexGrow: 1,
  },
}));

const Product = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar classes={classes} />
    </>
  );
};

export default Product;
