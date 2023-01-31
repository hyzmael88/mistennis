import React, { createContext, useContext, useState, useEffect } from 'react'
import { client } from '../lib/client'

const StateContext = createContext()


export function StateContextProvider({ children }) {



    const [products, setProducts] = useState([])
    const [posts, setPosts] = useState([])

    const getProducts = async () => {
        const query = '*[_type == "product"]'
        const products = await client.fetch(query)
        setProducts(products)
    }
    const getPosts = async () => {
        const query = '*[_type == "blogPost"]'
        const posts = await client.fetch(query)
        setPosts(posts)
    }

    useEffect(() => {
        getProducts()
        getPosts()
    }, [])

    return (
        <StateContext.Provider value={{
            products,
            getProducts,
            posts,
            getPosts
        }}>
            {children}
        </StateContext.Provider>
    );
}

export function AppContext() {
    return useContext(StateContext)
}

