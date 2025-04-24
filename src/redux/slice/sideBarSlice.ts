import { createSlice } from "@reduxjs/toolkit"

interface sideBarSliceInterface {
    isOpen: boolean
}

const initialState: sideBarSliceInterface = {
    isOpen: false,
}

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState,
    reducers: {
        toggleSidebar: (state): void => {
            state.isOpen = !state.isOpen
        },
        closeSidebar: (state): void => {
            state.isOpen = false
        }
    }
})

export const { toggleSidebar,closeSidebar } = sideBarSlice.actions
export default sideBarSlice.reducer
