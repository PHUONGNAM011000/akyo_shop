import {
  AppBar,
  Avatar,
  Badge,
  CssBaseline,
  Toolbar,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const NavBar = ({ classes }) => {
  const [openCart, setOpenCart] = useState(false);
  const productCart = useSelector((state) => state.cart.productCart);

  const qualityProduct = productCart.reduce((acc, item) => {
    return acc + item.quality;
  }, 0);

  return (
    <div className={classes.appBar}>
      {openCart && <Cart setOpenCart={setOpenCart} />}
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalMallIcon className={classes.icon} />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.nameShop}
          >
            Akyo Shop
          </Typography>
          <Avatar
            className={classes.icon}
            alt="user"
            src="https://images.unsplash.com/photo-1650662721083-867715246fbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.icon}
          >
            Phuong Nam
          </Typography>
          <FavoriteIcon fontSize="large" className={classes.icon} />
          <Badge
            badgeContent={qualityProduct}
            color="secondary"
            onClick={() => setOpenCart(true)}
          >
            <ShoppingCartIcon fontSize="large" className={classes.cart} />
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
