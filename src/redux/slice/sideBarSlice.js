import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen: false,
}

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen
        },
        closeSidebar: (state) => {
            state.isOpen = false
        }
    }
})
