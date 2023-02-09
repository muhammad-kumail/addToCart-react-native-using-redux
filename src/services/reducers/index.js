import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import cartItems from "./reducer";

const rootReducer =  combineReducers({
    cartItems,
})
const configureStore = ()=>{
    return createStore(rootReducer, applyMiddleware(thunk))
}
export default configureStore