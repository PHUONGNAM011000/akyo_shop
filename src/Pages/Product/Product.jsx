import { makeStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import About from './About/About';
import Description from './Description/Description';
import Footer from '../../Components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionsProduct } from '../../store/productSlice';

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { productId } = params;

  const productHome = useSelector((state) => state.home.productHome);

  const product = productHome.filter((item) => item.id === +productId);

  useEffect(() => {
    dispatch(actionsProduct.imageScaledChanged(product[0].images.image1));
    dispatch(actionsProduct.defaultProduct());
  }, []);

  return (
    <>
      <NavBar />
      <About product={product} />
      <Description />
      <Footer />
    </>
  );
};

export default Product;
