import { createSlice } from "@reduxjs/toolkit"
import getProducts from "../thunk"
import { ApiProductInterface } from "../../interfaces/ApiProductInterface"

interface productSliceInterface {
    products: Array<ApiProductInterface>
}

const initialState: productSliceInterface = {
    products: []
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder): void => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

export default productSlice.reducer
