import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import FormatPrice from '../Helpers/FormatPrice';

const ModalProduct = (props) => {

  return (
    <>
      <div className="row ">
        <div className="col-2 cartproductImage ">
          <img src={props.image} alt="Image is not supporting" />
        </div>
        <div className="col-7 center cartProductColumn">
          <p>{props.productName}-{props.color}-{props.size}</p>
          <div className="btn-group ">
            <button type="button" className="btn " onClick={()=> props.decrementCartCount(props.id)} >-</button>
            <button type="button" className="btn ">{props.count}</button>
            <button type="button" className="btn " onClick={()=> props.incrementCartCount(props.id)}>+</button>
          </div>
        </div>
        <div className="col-2 center cartProductColumn">
          <AiFillDelete onClick={() => props.removeItem(props.id)} />
          <p>{<FormatPrice price={props.price * props.count} />}</p>
        </div>
      </div>
      <hr className="modalProducthr"/>
    </>
  );
};
export default ModalProduct;