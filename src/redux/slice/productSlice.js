import { createSlice } from "@reduxjs/toolkit"
import getProducts from "../thunk";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, products) => {
            state.products = products
        })
    }
})
