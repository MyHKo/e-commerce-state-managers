const createSelectors = (store) => {
    return {
        use: (selector) => {return store(selector)},
        ...store
    }
}

export default createSelectors;
