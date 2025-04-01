import { create } from "zustand";
import createSelectors from "./CreateSelectors";
import {devtools} from "zustand/middleware";

const useSideBarStoreBase = create(
    devtools((set) => {
    return {
        isOpen: false,
        handleClose: () => {
            return set((state) => ({isOpen: !state.isOpen}))
        },
        close: () => {
            return set((state) => ({isOpen: false}))
        }
    }
}));

const useSideBarStore = createSelectors(useSideBarStoreBase)

export {useSideBarStore};
