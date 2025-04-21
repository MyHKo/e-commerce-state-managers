import productReducer from './slice/productSlice'
import cartReducer from './slice/cartSlice'
import sideBarReducer from './slice/sideBarSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        sideBar: sideBarReducer,
    }
})

export default store
