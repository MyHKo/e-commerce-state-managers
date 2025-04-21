import { createSlice } from "@reduxjs/toolkit"

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
