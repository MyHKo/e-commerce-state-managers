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


export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
export default store
