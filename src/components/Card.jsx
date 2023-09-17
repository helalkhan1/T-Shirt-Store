import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import Star from "./Star";
import FormatPrice from "../Helpers/FormatPrice";

function Card  (props)  {
    const [over, setOver] = useState(false);
    const [image, setImage] = useState(props.image1);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(image === props.image1){
                setImage( props.image2.imgsrc);
            }else{
                setImage( props.image1);
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [image]);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  	useEffect(() => {
    		const updateWidth = () => {
      			setScreenWidth(window.innerWidth)
    		}
    		window.addEventListener('resize', updateWidth);
    		return(() => {
        		window.removeEventListener('resize', updateWidth);
    		})
  	}, [screenWidth]);
     
    return (
        <>                            
            <div className={` ${screenWidth > 768 ? "col-3" : "col-6" }`}>
                <div className="cardcontainer mt-4">
                    <div className="cardstyle ">
                        <Link to= {`/T-Shirt-Store/Product/${props.productName} `}

                            onMouseOver={() => setOver(true)}
                            onMouseOut={() => setOver(false)}   >

                            {screenWidth < 768 ? ( <img src= {image} alt="Not supporting" />):( <img src= {over ? props.image2.imgsrc : props.image1} alt="Not supporting" />)}

                            <div className="cardcontent"> 
                                <p><Star stars ={props.stars} /><br/>{props.category}<br/> <b>{props.productName}{screenWidth}</b><br/>Price: {<FormatPrice price={props.price} />}</p>
                            </div>
                        </Link> 
                    </div>   
                </div>  
            </div>
        </>
    );
}
export default Card;