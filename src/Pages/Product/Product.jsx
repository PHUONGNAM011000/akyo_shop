import { makeStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import About from './About/About';
import Description from './Description/Description';
import Footer from '../../Components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  nameShop: {
    flexGrow: 1,
  },
}));

const Product = () => {
  const classes = useStyles();
  const params = useParams();

  const { productId } = params;

  const productHome = useSelector((state) => state.home.productHome);

  const product = productHome.filter((item) => item.id === +productId);

  console.log(product);

  return (
    <>
      <NavBar classes={classes} />
      {product.length === 1 && <About product={product} />}
      <Description />
      <Footer classes={classes} />
    </>
  );
};

export default Product;
