import { createAsyncThunk } from '@reduxjs/toolkit'
import { ApiProductInterface } from "../interfaces/ApiProductInterface";

const getProducts = createAsyncThunk<Array<ApiProductInterface>>(
    "products/getProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        return response.json()
    }
)

export default getProducts
