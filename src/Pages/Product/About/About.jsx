import React from 'react';
import classes from './About.module.css';
import { AiFillHeart } from 'react-icons/ai';
import Description from '../Description/Description';

const About = (props) => {
  return (
    <div className={classes.about}>
      <div className={classes.img}>
        <ul>
          <li>
            <img
              src="https://oversizedshop.com.vn/ovs/uploads/2022/02/DSC00152-150x150.jpg"
              alt="#"
            />
          </li>
          <li>
            <img
              src="https://oversizedshop.com.vn/ovs/uploads/2022/02/DSC00152-150x150.jpg"
              alt="#"
            />
          </li>
          <li>
            <img
              src="https://oversizedshop.com.vn/ovs/uploads/2022/02/DSC00152-150x150.jpg"
              alt="#"
            />
          </li>
          <li>
            <img
              src="https://oversizedshop.com.vn/ovs/uploads/2022/02/DSC00152-150x150.jpg"
              alt="#"
            />
          </li>
          <li>
            <img
              src="https://oversizedshop.com.vn/ovs/uploads/2022/02/DSC00152-150x150.jpg"
              alt="#"
            />
          </li>
        </ul>
        <div className={classes.imgMain}>
          <img
            src="https://oversizedshop.com.vn/ovs/uploads/2022/02/DSC00627-scaled.jpg.webp"
            alt="#"
          />
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
            <AiFillHeart></AiFillHeart>
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
