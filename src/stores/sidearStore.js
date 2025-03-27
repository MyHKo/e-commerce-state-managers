import { create } from "zustand";

const useSideBarStore = create((set) => {
    return {
        isOpen: false,
        handleClose: set((state) => ({count: !state})),
    }
});

export {useSideBarStore};
