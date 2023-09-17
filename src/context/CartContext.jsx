import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const  getLocalStorageData = () => {
    let  localStorageData = localStorage.getItem("T-ShirtStore");
 
    if(localStorageData === null){
        return [];
    }else{
        return JSON.parse(localStorageData);
    }
}

const initialState = {
    cart : getLocalStorageData (),
    total_item: "",
    total_price: "",
    total_price_with_vat: "",
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (productName,price, count, size, displayProduct  ) => {
        dispatch({type: "ADD_TO_CART", payload: {productName,price, count, size, displayProduct }});
    };

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload:id});
    };

    const clearCart =()=> {
        dispatch({type: "CLEAR_CART"});
    };

    const incrementCartCount = (id) => {
        dispatch({type: "INCREMENT_CART_COUNT", payload:id});
    }
    const decrementCartCount = (id) => {
        dispatch({type: "DECREMENT_CART_COUNT", payload:id});
    }


    useEffect(() => {
        dispatch({type: "UPDATE_CART_TOTAL_ITEM_PRICE"});
        localStorage.setItem("T-ShirtStore", JSON.stringify(state.cart));
    },[state.cart]);


    return <CartContext.Provider value = {{...state, addToCart, removeItem, clearCart, incrementCartCount, decrementCartCount}}>
        {children}
    </CartContext.Provider>
};


const useCartContext = () =>{
    return useContext(CartContext);
};

export {CartProvider, useCartContext};