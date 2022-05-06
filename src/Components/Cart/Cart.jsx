import { Avatar } from '@material-ui/core';
import React from 'react';
import { GrClose } from 'react-icons/gr';
import classes from './Cart.module.css';
import Drawer from '@material-ui/core/Drawer';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionsCart } from '../../store/cartSlice';

const Cart = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const productCart = useSelector((state) => state.cart.productCart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const removeCartHandler = (id) => {
    dispatch(actionsCart.deleteCart(id));
  };

  return (
    <Drawer
      anchor={'right'}
      open={true}
      onClose={() => props.setOpenCart(false)}
    >
      <div className={classes.cart}>
        <div className={classes.header_cart}>
          <div className={classes.close}>
            <GrClose onClick={() => props.setOpenCart(false)} />
          </div>
          <div className={classes.card}>GIỎ HÀNG</div>
        </div>
        {productCart.map((item) => (
          <div className={classes.cart_info} key={item.id}>
            <div className={classes.product}>
              <div className={classes.avatar}>
                <Avatar
                  alt="Remy Sharp"
                  variant="square"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  src={item.image}
                />
              </div>
              <div className={classes.info}>
                <div className={classes.name}>{item.name}</div>
                <div className={classes.price}>
                  {item.quality} x {item.price}₫
                </div>
              </div>
            </div>
            <div
              className={classes.closeProduct}
              onClick={() => removeCartHandler(item.id)}
            >
              <GrClose />
            </div>
          </div>
        ))}

        <div className={classes.amount}>
          <div>Tổng số phụ:</div>
          <div>
            {totalAmount}
            {totalAmount !== 0 && <span>.000đ</span>}
          </div>
        </div>
        <div className={classes.actions}>
          <button>XEM GIỎ HÀNG</button>
          <button onClick={() => history.push('/checkout')}>THANH TOÁN </button>
          <button onClick={() => props.setOpenCart(false)}>
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default Cart;
