import productReducer from './slice/productSlice'
import cartReducer from './slice/cartSlice'
import sidebarReducer from './slice/sidebarSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        sideBar: sidebarReducer,
    }
})

export default store
