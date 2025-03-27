import { create } from "zustand";

const useSideBarStore = create((set) => {
    return {
        isOpen: false,
        handleClose: () => {
            return set((state) => ({isOpen: !state.isOpen}))
        },
        close: () => {
            return set((state) => ({isOpen: false}))
        }
    }
});

export {useSideBarStore};
