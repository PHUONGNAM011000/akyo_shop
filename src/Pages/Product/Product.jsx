import { makeStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import About from './About/About';
import Description from './Description/Description';

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
      <About />
      <Description />
    </>
  );
};

export default Product;
