import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import sideBarReducer from "./reducers/sideBarReducer";

export default combineReducers({
    product: productReducer,
    cart: cartReducer,
    sideBar: sideBarReducer
})
