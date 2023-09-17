import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';

const CheckOutCart = (props) => {

  return (
    <>
      <div className="row threeSideBorder py-2">
        <div className="col-8 ">
          <p>{props.productName}-{props.color}-{props.size} x{props.count}</p>
        </div>
        <div className="col-4 ">
          <p>{<FormatPrice price={props.price * props.count} />}</p>
        </div>                               
      </div>
    </>
  );
};
export default CheckOutCart;