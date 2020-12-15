import React, { useState } from 'react'

export const initialContext = {
    products: [],
    setProducts: () => { }
};

export const ProductContext = React.createContext(initialContext);

const ProductContextProvider = (props) => {
    const setProducts = (products) => setState({ ...state, products })

    const [state, setState] = useState({
        products: initialContext.products,
        setProducts
    });

    return (
        <ProductContext.Provider value={state}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;