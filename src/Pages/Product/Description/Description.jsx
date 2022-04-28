import React from 'react';
import classes from './Description.module.css';

const Description = () => {
  return (
    <div className={classes.description}>
      <div className={classes.description_info}>
        <div className={classes['description_info--container']}>
          <h3>Mô tả</h3>
          {/* <div className={classes.increase}></div> */}
          <div className={classes.boxDecrease}>
            <div className={classes.decrease}></div>
          </div>
        </div>
        <div className={classes['description_info--list']}>
          <div>
            <h4>THÔNG TIN SẢN PHẨM</h4>
            <ul>
              <li>Sản phẩm: Playsuit</li>
              <li>Mã sản phẩm: ZA10</li>
              <li>Xuất xứ: Việt Nam</li>
              <li>Màu sắc: Hồng</li>
            </ul>
          </div>
          <div>
            <h4>HƯỚNG DẪN CHỌN SIZE</h4>
            <ul>
              <li>Size S: ngực 83 eo 64cm (eo đo trên rốn 2cm) mông 86-90cm</li>
              <li>Size M: ngực 86 eo 68cm (eo đo trên rốn 2cm) mông 90-94cm</li>
            </ul>
            <p>
              Quý khách vui lòng inbox shop để được tư vấn, lựa chọn size phù
              hợp
            </p>
          </div>
          <div>
            <h4>HƯỚNG DẪN BẢO QUẢN</h4>
            <ul>
              <li>Ưu tiên giặt tay ở nhiệt độ nước không quá 30 độ C</li>
              <li>Giặt máy ở chế độ êm dịu</li>
              <li>Không nên ngâm quá lâu và giặt bằng chất tẩy mạnh</li>
              <li>Màu sắc: Hồng</li>
            </ul>
          </div>
          <div>
            <h4>OVERSIZED SHOP CAM KẾT</h4>
            <ul>
              <li>Tư vấn hỗ trợ khách hàng nhiệt tình, chu đáo</li>
              <li>Thời gian chuẩn bị hàng tối ưu nhất</li>
            </ul>
          </div>
          <div>
            <h4>CHÍNH SÁCH MUA VÀ ĐỔI TRẢ HÀNG TẠI OVERSIZED</h4>
            <ul>
              <li>
                Đổi trả trong vòng 48h từ lúc nhận được sản phẩm, lưu ý sản phẩm
                yêu cầu còn nguyên tag để đổi trả
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.description_info}>
        <div className={classes['description_info--container']}>
          <h3>Thông tin bổ sung</h3>
          {/* <div className={classes.increase}></div> */}
          <div className={classes.boxDecrease}>
            <div className={classes.decrease}></div>
          </div>
        </div>
        <div className={classes.table}>
          <div className={classes.size}>Size</div>
          <div className={classes.sizeResult}>S, M</div>
        </div>
      </div>
    </div>
  );
};

export default Description;
