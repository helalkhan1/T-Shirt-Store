
const ProctReducer = (state, action) => {
   
    switch(action.type){
       
        case "ALL_DATA" :
            const menData = action.payload.filter((item) => item.category === 'Men'  );
            const womenData = action.payload.filter((item) => item.category === 'Women'  );

            return {
                ...state,
                women: womenData,
                men : menData,
                products: action.payload,
            }
    
        case "SINGLE_DATA" :
                    
            return {
                ...state, 
                singleProduct: action.payload,
            };
                

        default:
            return state;
    }

};

export default ProctReducer;