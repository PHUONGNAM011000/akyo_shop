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

const ProductItem = ({ classes, card }) => {
  return (
    <Grid item key={card.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={card.images.image1}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography>{card.name}</Typography>
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
          >
            Thêm vào giỏ hàng
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
