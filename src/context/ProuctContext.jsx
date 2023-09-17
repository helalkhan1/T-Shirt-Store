import { createContext, useContext, useEffect, useReducer } from "react";
import data from "../components/data";
import reducer from "../reducer/ProuctReducer"

const AppContext = createContext();

const initialState = {
    products : [],
    women :[],
    men : [],
    singleProduct: {},
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer (reducer, initialState);

    const getProducts =  () => {
        const productdData = data;
        dispatch({type:"ALL_DATA", payload: productdData});  
    };

    const getSingleProduct = (pName) => {
        const singleProductData = data.find(data => data.productName === pName );
        dispatch({type:"SINGLE_DATA", payload: singleProductData});
    };


    useEffect(() => {
        getProducts();
    }, []);


    return(
        <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
    )
};


const useProuctContext = () => {
    return useContext(AppContext);
}

export { AppProvider , AppContext, useProuctContext  };

