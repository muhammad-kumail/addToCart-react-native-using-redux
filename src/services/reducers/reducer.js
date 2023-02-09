import { actionType } from "../constants";

const initialState = {
    cartData: []
}
export default function cartItems(state = initialState, action) {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            console.log(state)
            return {
                ...state, cartData: [...state.cartData, action.data]
            }
        case actionType.REMORE_FROM_CART:
            console.log(state)
            state.cartData.splice(action.data,1)
            return {
                ...state, cartData: [...state.cartData]
            }
        default:
            // console.log("Here is state: ",state)
            return state
    }
}