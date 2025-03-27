import { create } from "zustand";

const useProductStore = create((set) => {

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
});

export { useProductStore };
