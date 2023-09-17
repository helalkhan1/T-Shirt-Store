import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useCartContext } from '../context/CartContext';
import FormatPrice from '../Helpers/FormatPrice';

const CartSingleProduct = (props) => {
    const { removeItem, incrementCartCount, decrementCartCount } = useCartContext();

  return (
    <> 
        <div className="row threeSideBorder">
            <div className="col-4">
                <div className="row">
                    <div className="col-md-4 cartproductImage ">
                        <img src={props.image} alt="Image is not supporting" />
                    </div>
                    <div className="col-md-8 cartProductColumn ">
                        <p>{props.productName}-{props.color}<br/>{props.size}</p>
                    </div>
                </div>
            </div>
            <div className="col-5 cartProductColumn">
                <div className="row">
                    <div className="col-md-4">
                        <p>{<FormatPrice price={props.price} />}</p>
                    </div>
                    <div className="col-md-8">
                        <div className="btn-group ">
                            <button type="button" className="btn " onClick={()=> decrementCartCount(props.id)} >-</button>
                            <button type="button" className="btn ">{props.count}</button>
                            <button type="button" className="btn " onClick={()=> incrementCartCount(props.id)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3 cartProductColumn">
                <div className="row">
                    <div className="col-md-6 order-2 order-md-1">
                        <p>{<FormatPrice price={props.price * props.count} />}</p>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <AiFillDelete onClick={() => removeItem(props.id)} />
                    </div>
                </div>
            </div>   
        </div>
    </>
  );
}
export default CartSingleProduct;
