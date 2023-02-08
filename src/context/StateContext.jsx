import React, { createContext, useContext, useState, useEffect } from 'react'
import { client } from '../lib/client'

const StateContext = createContext()


export function StateContextProvider({ children }) {



    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])
    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])

    

    const getProducts = async () => {
        const query = '*[_type == "product"]'
        const products = await client.fetch(query)
        const productsWMinMax = products?.map((product) => {
       
            const minPrice = Math.min(...product.sizes.map((size) => size.price));
            //Math.min le puedes dar una serie de numeros y te regresa el minimo
            const maxPrice = Math.max(...product.sizes.map((size) => size.price));
            return { ...product,  minPrice, maxPrice };
            
          });
         
        setProducts(productsWMinMax)
    }

    


   

    const getProduct = async (productSlug) => {
        console.log(productSlug)
        const query = `*[_type == "product" && slug.current == $productSlug]`
        const params = {productSlug}
        const product = await client.fetch(query, params)
        setProduct(product)
    }
    const getPosts = async () => {
        const query = '*[_type == "blogPost"]'
        const posts = await client.fetch(query)
        setPosts(posts)
    }
    const getCategories = async () =>{
        const query = '*[_type == "category"]'
        const categories  = await client.fetch(query)
        setCategories(categories)
    }

    useEffect(() => {
        getProducts()
        getPosts()
        getCategories()
    }, [])

    return (
        <StateContext.Provider value={{
            products,
            getProducts,
            posts,
            getPosts,
            categories,
            setCategories,
            product,
            setProduct,
            getProduct
        }}>
            {children}
        </StateContext.Provider>
    );
}

export function AppContext() {
    return useContext(StateContext)
}

