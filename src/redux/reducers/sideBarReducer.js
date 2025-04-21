import {CLOSE_SIDEBAR, TOGGLE_SIDEBAR} from "../constants";

const initialState = {
    isOpen: false,
}

const sideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                isOpen: !state.isOpen,
            }
        case CLOSE_SIDEBAR:
            return {
                ...state,
                isOpen: false,
            }
    }
}
