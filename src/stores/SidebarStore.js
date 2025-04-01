import { create } from "zustand";
import createSelectors from "./CreateSelectors";

const useSideBarStoreBase = create((set) => {
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

const useSideBarStore = createSelectors(useSideBarStoreBase)

export {useSideBarStore};
