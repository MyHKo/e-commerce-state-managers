import { create } from "zustand";
import createSelectors from "./CreateSelectors";
import {devtools} from "zustand/middleware";

const useProductStoreBase = create(
    devtools((set) => {

    const fetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            set({products: data})
        }
        catch(e) {
            console.error(e);
        }
    }

    fetchData();

    return {
        products: []
    }
}));

const useProductStore = createSelectors(useProductStoreBase);

export { useProductStore };
