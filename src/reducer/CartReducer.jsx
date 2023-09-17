
 const CartReducer = (state , action) => {
    if (action.type === "ADD_TO_CART"){
        let {productName,price, count, size, displayProduct } = action.payload;
        let existItem = state.cart.find((item) => item.id === productName + displayProduct.color + size );

        if(existItem){
          let updatedProduct = state.cart.map((item) => {
            if( item.id === existItem.id) {
              let newCount = existItem.count + count;
              if (newCount >= existItem.stock){
                newCount = existItem.stock;
              }
              
              return {
                ...item,
                count: newCount,
              };

            } else {
              return item;
            }
          });
          return {
            ...state,
            cart: updatedProduct,
          }
        }else{

        let cartProduct ;
        
        cartProduct = {
          id : productName + displayProduct.color + size,
          productName,
          color : displayProduct.color,
          price,
          count,
          size,
          image : displayProduct.imgsrc,
          stock : displayProduct.stock,
        };
        return {
          ...state,
          cart : [cartProduct, ...state.cart]
        }
      }
      
    };

    if (action.type ==="REMOVE_ITEM"){
      const updatedCart = state.cart.filter((item) => item.id !== action.payload)
      return {
        ...state,
        cart: updatedCart
      };
    };

    if (action.type === "CLEAR_CART"){
      return {
        ...state,
        cart: [],
      }
    };

    if (action.type === "INCREMENT_CART_COUNT"){
      let updateCount = state.cart.map((item) =>{
        if(item.id === action.payload){
          let increment = item.count + 1;
          
          if(increment >= item.stock ){
            increment= item.stock;
          }
          return {
            ...item,
            count: increment,
          };
        }else{
          return item;
        }
      });
      return{
        ...state,
        cart: updateCount,
      }
    };


    if(action.type === "DECREMENT_CART_COUNT" ){
      let updateCount = state.cart.map((item) => {
        if(item.id === action.payload){
         
          let decrement = item.count -1;
          if(decrement <= 1){
            decrement=1;
          }
          return{
            ...item,
            count: decrement,
          }
      
        }else{
          return item;
        }
      })
      return {
        ...state,
        cart: updateCount,
      }
    };


    if (action.type === "UPDATE_CART_TOTAL_ITEM_PRICE"){
      let {total_item, total_price}= state.cart.reduce((accumulator, currentValue) =>{
        let {count, price} = currentValue;
        accumulator.total_item += count;
        accumulator.total_price += price * count; 
        return accumulator;
      },{
        total_item:0,
        total_price:0
      });
      let total_price_with_vat = total_price + (total_price * 0.15) ;
      return {
        ...state,
        total_item,
        total_price,
        total_price_with_vat,
      }
    };

  return state;
};

export default CartReducer;