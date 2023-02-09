import { actionType } from "../constants";
export const addToCart = (data)=>{
    return async function(dispatch){
        try{
            dispatch({type: actionType.ADD_TO_CART,data: data})
        }catch(e){
            console.log("Error in addToCart",e);
        }
    }
}
export const removeFromCart = (data)=>{
    return async function(dispatch){
        try{
            dispatch({type: actionType.REMORE_FROM_CART,data})
        }catch(e){
            console.log("Error in RemoveFromCart",e);
        }
    }
}