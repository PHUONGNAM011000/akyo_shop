import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actionsCart } from '../../../../store/cartSlice';

const ProductItem = ({ classes, card }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      actionsCart.addCart({
        id: card.id,
        name: card.name,
        price: card.price,
        image: card.images.image1,
      })
    );
  };

  return (
    <Grid item key={card.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={`${card.images.image1}-scaled.jpg.webp`}
          title="Image title"
          onClick={() => {
            history.push(`/product/${card.id}`);
          }}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            onClick={() => {
              history.push(`/product/${card.id}`);
            }}
          >
            {card.name}
          </Typography>
          <div className={classes.textPrice}>
            <Typography>{card.price}.000đ</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            fullWidth={true}
            onClick={addToCartHandler}
          >
            Thêm vào giỏ hàng
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
