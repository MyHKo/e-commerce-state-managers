import {CLOSE_SIDEBAR, OPEN_SIDEBAR} from "../constants";

export const openSidebar = () => ({
    type: OPEN_SIDEBAR,
})

export const closeSidebar = () => ({
    type: CLOSE_SIDEBAR,
})
