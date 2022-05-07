import React from 'react';
import classes from './About.module.css';
import { AiFillHeart } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { actionsProduct } from '../../../store/productSlice';

const About = (props) => {
  const dispatch = useDispatch();
  const image1 = useSelector((state) => state.product.image1);
  const image2 = useSelector((state) => state.product.image2);
  const image3 = useSelector((state) => state.product.image3);
  const image4 = useSelector((state) => state.product.image4);
  const image5 = useSelector((state) => state.product.image5);
  const imageScaled = useSelector((state) => state.product.imageScaled);
  const liked = useSelector((state) => state.product.liked);

  return (
    <div className={classes.about}>
      <div className={classes.img}>
        <ul>
          <li>
            <img
              onClick={() => {
                dispatch(
                  actionsProduct.imageScaledChanged(
                    props.product[0].images.image1
                  )
                );
                dispatch(actionsProduct.image1Changed());
              }}
              className={image1 ? classes.opacity : ''}
              src={`${props.product[0].images.image1}-150x150.jpg`}
              alt="#"
            />
          </li>
          <li>
            <img
              onClick={() => {
                dispatch(
                  actionsProduct.imageScaledChanged(
                    props.product[0].images.image2
                  )
                );
                dispatch(actionsProduct.image2Changed());
              }}
              className={image2 ? classes.opacity : ''}
              src={`${props.product[0].images.image2}-150x150.jpg`}
              alt="#"
            />
          </li>
          <li>
            <img
              onClick={() => {
                dispatch(
                  actionsProduct.imageScaledChanged(
                    props.product[0].images.image3
                  )
                );
                dispatch(actionsProduct.image3Changed());
              }}
              className={image3 ? classes.opacity : ''}
              src={`${props.product[0].images.image3}-150x150.jpg`}
              alt="#"
            />
          </li>
          <li>
            <img
              onClick={() => {
                dispatch(
                  actionsProduct.imageScaledChanged(
                    props.product[0].images.image4
                  )
                );
                dispatch(actionsProduct.image4Changed());
              }}
              className={image4 ? classes.opacity : ''}
              src={`${props.product[0].images.image4}-150x150.jpg`}
              alt="#"
            />
          </li>
          <li>
            <img
              onClick={() => {
                dispatch(
                  actionsProduct.imageScaledChanged(
                    props.product[0].images.image5
                  )
                );
                dispatch(actionsProduct.image5Changed());
              }}
              className={image5 ? classes.opacity : ''}
              src={`${props.product[0].images.image5}-150x150.jpg`}
              alt="#"
            />
          </li>
        </ul>
        <div className={classes.imgMain}>
          <img src={`${imageScaled}-scaled.jpg.webp`} alt="#" />
        </div>
      </div>
      <div className={classes.info}>
        <h6>Áo cổ yếm Overiszed thêu hoa [ZA9]</h6>
        <p className={classes.price}>295.000₫</p>
        <div className={classes.groupActions}>
          <div className={classes.amount}>
            <button className={classes.decrease}>-</button>
            <input type="text" defaultValue={1} />
            <button className={classes.increase}>+</button>
          </div>
          <button className={classes.add}>THÊM VÀO GIỎ HÀNG</button>
          <div className={classes.icon}>
            {liked ? (
              <AiFillHeart
                onClick={() => dispatch(actionsProduct.changedLiked())}
              />
            ) : (
              <FiHeart
                onClick={() => dispatch(actionsProduct.changedLiked())}
              />
            )}
          </div>
        </div>
        <div className={classes.description}>
          <span style={{ marginRight: '1rem' }}>
            Hướng dẫn chọn Size và bảo quản
          </span>
          <span>Mua và đổi trả</span>
        </div>
        <div>
          <p>
            Danh mục: <span>ÁO</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
