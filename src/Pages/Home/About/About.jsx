import { Typography } from '@material-ui/core';
import React from 'react';

const About = ({ classes }) => {
  return (
    <>
      <div className={classes.infoShop}>
        <Typography>Freeship đơn từ 900k HCM</Typography>
        <Typography>Đặt hàng nhanh qua Messenger</Typography>
        <Typography>Đổi trả trong 48h nếu có lỗi từ nhà sản xuất</Typography>
      </div>

      <div className={classes.titleProduct}>
        <Typography component="h1" variant="h2" align="center" noWrap>
          New Arrivals
        </Typography>
      </div>
    </>
  );
};

export default About;
