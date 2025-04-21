import { createAsyncThunk } from '@reduxjs/toolkit'

const getProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        return response.json()
    }
)

export default getProducts;
