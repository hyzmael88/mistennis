import React, { createContext, useContext, useState, useEffect } from 'react'
import { client } from '../lib/client'

const StateContext = createContext()


export function StateContextProvider({ children }) {



    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const query = '*[_type == "product"]'
        const products = await client.fetch(query)
        setProducts(products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <StateContext.Provider value={{
            products,
            getProducts
        }}>
            {children}
        </StateContext.Provider>
    );
}

export function AppContext() {
    return useContext(StateContext)
}

