import React, { useState , useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom';
import "./style.css";
import { useProuctContext } from "../context/ProuctContext";
import FormatPrice from "../Helpers/FormatPrice";
import { useCartContext } from "../context/CartContext";
import Card from "./Card";
import Star from "./Star";
import UserRating from "./UserRating";
import Modal from "./Modal";


const Product = () => {

    const {getSingleProduct, singleProduct, men, women} = useProuctContext();
    const { pName } = useParams();
    const {addToCart, cart, total_price,  incrementCartCount, decrementCartCount, removeItem } = useCartContext();
    const [modal, setModal] = useState(false);
    const closeModal = () => setModal(false);

    const {
        image1,
        image2 = [],
        image3 = [],
        image4 = [],
        productName,
        category,
        price,
        stars,
        reviews,
    } = singleProduct;

    const womenData = women.filter((item) =>  item.productName !== pName);
    const menData = men.filter((item) => item.productName !== pName);
    const isMen = category === "Men";

    useEffect(() => {
        getSingleProduct(pName);
         
    },[pName]);
   
    const [disablebSizebtn, updatedDisablebSizebtn] = useState(true);
    const [displayProduct, updateProduct] = useState({color : "", imgsrc: image1 , stock:0});
    const [stockProduct, updateStock] = useState();

    useEffect(() => {
        updateProduct({color : "", imgsrc: image1 , stock:0})
    },[image1]);
    

    const blackImg = () => {
        updatedDisablebSizebtn(false);
        if ( image2.color === "Black"){
            updateProduct({color : "Black", imgsrc: image2.imgsrc , stock:0})
            updateStock(image2)
        }
        else if ( image3.color === "Black"){
            updateProduct({color : "Black", imgsrc: image3.imgsrc , stock:0 })
            updateStock(image3)
           
        }else{
            updateProduct({color : "Black", imgsrc: image4.imgsrc , stock:0})
            updateStock(image4)
        }
    };

    const orangeImg = () => {
        updatedDisablebSizebtn(false);
        if ( image2.color === "Orange"){
            updateProduct({color : "Orange", imgsrc: image2.imgsrc , stock:0})
            updateStock(image2)
        }
        else if ( image3.color === "Orange"){
            updateProduct({color : "Orange", imgsrc: image3.imgsrc , stock:0})
            updateStock(image3)
        }else{
            updateProduct({color : "Orange", imgsrc: image4.imgsrc , stock:0})
            updateStock(image4)
        } 
    };

    const whiteImg = () => {
        updatedDisablebSizebtn(false);
        if ( image2.color === "White"){
            updateProduct({color : "White", imgsrc: image2.imgsrc , stock:0})
            updateStock(image2)
        }
        else if ( image3.color === "White"){
            updateProduct({color : "White", imgsrc: image3.imgsrc , stock:0})
            updateStock(image3)
        }else{
            updateProduct({color : "White", imgsrc: image4.imgsrc , stock:0 })
            updateStock(image4)
        }   
    };


    const [disabledAddbtn, updateDisabledAddbtn] = useState(true);
    const [size, updateSize] = useState();

    const sizeButton = (selectedSize) =>{
        const newStock = stockProduct[selectedSize + "_stock"];
        if(newStock === 0 ){
            
        }else{
        updateDisabledAddbtn(false);
        updateSize(selectedSize);
        updateProduct({ ...displayProduct, stock: newStock });
        }
    };

    const [count, setCount] = useState(1);
    
    const handleIncrement = () => {
        if(count < displayProduct.stock){
            setCount((prevCount) => prevCount + 1);
        }
    };
  
    const handleDecrement = () => {
      if (count > 1) {
        setCount((prevCount) => prevCount - 1);
      }
    };

 
    useEffect (() => {
        setCount(1);
    },[displayProduct.imgsrc, size])

    useEffect (() => {
        updateSize();
        updateDisabledAddbtn(true);
        
    },[displayProduct.imgsrc])

    
    useEffect(() => {
      updatedDisablebSizebtn(true);
      window.scrollTo(0, 0);
    }, [pName]);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [displayProduct.color]);
  

    const [productDscription, setProductDscription] = useState({description:true, additionalInformation:false, reviews:false})
    const openProductDscription = (name) => {
        if (name === "description"){
          if(productDscription.description){
            setProductDscription({description:false, additionalInformation:false, reviews:false})
          }else{setProductDscription({description:true, additionalInformation:false, reviews:false})}
        }
        else if(name === "additionalInformation"){
            if(productDscription.additionalInformation){
                setProductDscription({description:false, additionalInformation:false, reviews:false})
              }else{setProductDscription({description:false, additionalInformation:true, reviews:false})}
        }
        else if (name === "reviews") {
            if(productDscription.reviews){
                setProductDscription({description:false, additionalInformation:false, reviews:false})
              }else{setProductDscription({description:false, additionalInformation:false, reviews:true})}
        }
      };


    const Description = () => {
        return (
            <>
                <div>
                    <h6><b>ABOUT THE PRODUCT</b></h6>
                    <p>This T-shirt is the best and world class desined. The quality of this T-Shirt is very good.</p>
                    <p>This is 100% cotton, Breathable Fabric and very much comfortable for everyone.</p>
                    <hr/>
                    <h6><b>SIZE & FIT</b></h6>
                    <p>You will get any size. Model is waering size L and is 5'7"</p>
                </div>
                <hr/>
            </>
        );
    };

    const AdditionalInformation = () => {
        return (
            <>
                <div className="mt-3 px-3 ">
                    <div className="row colorBoxBorder">
                        <div className="col-4 ">
                            <h6>Color</h6>
                        </div>
                        <div className="col-8 leftSideBorder">
                            <p>Black, Orange, White</p>
                        </div>
                    </div>
                    <div className="row threeSideBorder">
                        <div className="col-4 ">
                            <h6>Size</h6>
                        </div>
                        <div className="col-8 leftSideBorder">
                            <p>S, M, L, XL, XXL</p>
                        </div>
                    </div>
                </div>
                <hr/>
            </>
        );
    };

    const Reviews = () => {
        return(
            <>
                <p>Review this "{productName}" T-shirt.</p>
                <p>Your rating<sup>*</sup> <span><UserRating /> </span> </p>
                <label htmlFor="message">Your Review<sup>*</sup></label>
                <textarea className="form-control" rows="5" id="message" name="text"></textarea> 
                <button type="button" className="btn cartbtn my-3">Submit</button>
                <hr/>
            </>
        );
    };


    return (
        <>
            <div className="marginLeftRight mt-2">
                <div >
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-md-6 productDisplayimg center ">
                                <img src={displayProduct.imgsrc} alt="Not supporting" />
                                <div className="row my-4">
                                    <div className="col-6 productimg">  
                                        <img src={image2.imgsrc} alt="Not supporting" />
                                    </div>
                                    <div className="col-6 productimg">
                                        <img src={image3.imgsrc} alt="Not supporting" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 productimg">
                                        <img src={image4.imgsrc} alt="Not supporting" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 mobileMarginTop">
                                <p>{category}</p>
                                <h4><b> {productName}</b></h4>
                                <h5><b> {< FormatPrice price={price} />} </b></h5>
                                <Star stars={stars}/>  {reviews === 0 ?(<span>(No one review yet.)</span>):(<span>({reviews} people reviews this.)</span>)}
                                <p>This this a popular and beautiful designed T-Shirts.</p>
                                <p>Color</p><span></span>
                                <div className="btn-group mb-2">
                                    <button type="button" className= {`btn btn1 me-2 ${displayProduct.color === "Black"  ? 'selected' : ''}`}  onClick={blackImg}  >Black</button>
                                    <button type="button" className= {`btn btn1 me-2 ${displayProduct.color === "Orange" ? 'selected' : ''}`}  onClick={orangeImg} >Orange</button>
                                    <button type="button" className= {`btn btn1 me-2 ${displayProduct.color === "White"  ? 'selected' : ''}`}  onClick={whiteImg} >White</button>
                                </div>    
                                <hr/>
                                <p>Size</p>
                                <div className="btn-group mb-1">
                                    <button type="button" disabled={disablebSizebtn} className= {`btn btn1 me-2 ${size === "S"  ?  "selected" : ""}`}  onClick={()=> sizeButton("S")}  >S</button>
                                    <button type="button" disabled={disablebSizebtn} className= {`btn btn1 me-2 ${size === "M"  ?  "selected" : ""}`}  onClick={()=> sizeButton("M")}  >M</button>
                                    <button type="button" disabled={disablebSizebtn} className= {`btn btn1 me-2 ${size === "L"  ?  "selected" : ""}`}  onClick={()=> sizeButton("L")}  >L</button>
                                    <button type="button" disabled={disablebSizebtn} className= {`btn btn1 me-2 ${size === "XL" ?  "selected" : ""}`}  onClick={()=> sizeButton("XL")} >XL</button>
                                    <button type="button" disabled={disablebSizebtn} className= {`btn btn1 me-2 ${size === "XXL"?  "selected" : ""}`}  onClick={()=> sizeButton("XXL")}>XXL</button>
                                </div>    
                                <hr/>
                                <div className="btn-group">
                                    <button type="button" className="btn " onClick={handleDecrement} >-</button>
                                    <button type="button" className="btn ">{count}</button>
                                    <button type="button" className="btn "  onClick={handleIncrement} >+</button>

                                    {!disabledAddbtn? (
                                        <NavLink className="ms-5" onClick={() => addToCart (productName, price, count, size, displayProduct )}>
                                            <button type="button" className="btn btnAddCart" onClick={()=>setModal(true)} >Add to Cart</button>
                                        </NavLink>
                                        ):(
                                            <button type="button" disabled= {disabledAddbtn} className="btn ms-5 btnAddCart">Add to Cart</button> 
                                        )
                                    }
                                    { modal && <Modal closeModal={closeModal}  cart={cart} total_price={total_price} incrementCartCount={incrementCartCount} decrementCartCount={decrementCartCount} removeItem={removeItem} /> }

                                </div>
                                <hr/>
                                <h5><b>Description</b> <span className="rightFloat"> { productDscription.description ? (<button className="crossbtn" onClick= {()=>openProductDscription("description")} ><b>-</b></button>) : (<button className="crossbtn" onClick= {()=>openProductDscription("description")} ><b>+</b></button>)} </span></h5>
                                <hr/>
                                {productDscription.description && <Description />}

                                <h5><b>Additional Information</b><span className="rightFloat"> { productDscription.additionalInformation ? (<button className="crossbtn" onClick= {()=>openProductDscription("additionalInformation")} ><b>-</b></button>) : (<button className="crossbtn" onClick= {()=>openProductDscription("additionalInformation")} ><b>+</b></button>)} </span></h5>
                                <hr/>
                                {productDscription.additionalInformation && <AdditionalInformation />}

                                <h5><b>Reviews({reviews})</b> <span className="rightFloat"> { productDscription.reviews ? (<button className="crossbtn" onClick= {()=>openProductDscription("reviews")} ><b>-</b></button>) : (<button className="crossbtn" onClick= {()=>openProductDscription("reviews")} ><b>+</b></button>)} </span></h5>
                                <hr/>
                                {productDscription.reviews && <Reviews />}
                            </div>
                        </div>
                    </div> 

                    <div className=" mt-5">
                        <div className="center">
                            <h2><b>Related Products</b></h2>
                        </div>
                        <div className="container-fluid">
                            <div className="row">                        
         
                                {isMen?
                                    menData.slice(0,4).map((value, index) => {              
                                        return <Card key = {index}
                                            {...value}
                                        />                
                                    }):
                                    
                                    womenData.slice(0,4).map((value, index) => {              
                                        return <Card key = {index}
                                            {...value}
                                        />             
                                    })           
                                }
                            
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    );
};
export default Product;