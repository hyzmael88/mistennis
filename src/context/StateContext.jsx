import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/client";

const StateContext = createContext();

export function StateContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [cart, setCart] = useState([])


  //store
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const options = ["Recent", "Popular", "Higher Price", "Lower Price"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  //Auth
  const [error, setError] = useState(null)
  const [userResponse, setUserResponse] = useState(null)
  const [facebookResponse, setFacebookResponse] = useState(null)

  const getProducts = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    const sortedProductsRecent = [...products].sort(
      (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
    );

    const productsWMinMax = sortedProductsRecent?.map((product) => {
      const minPrice = Math.min(...product.sizes.map((size) => size.price));
      //Math.min le puedes dar una serie de numeros y te regresa el minimo
      const maxPrice = Math.max(...product.sizes.map((size) => size.price));
      return { ...product, minPrice, maxPrice };
    });

    setProducts(productsWMinMax);
  };

  const getProduct = async (productSlug) => {
    console.log(productSlug);
    const query = `*[_type == "product" && slug.current == $productSlug]`;
    const params = { productSlug };
    const product = await client.fetch(query, params);
    setProduct(product);
  };
  const getPosts = async () => {
    const query = '*[_type == "blogPost"]';
    const posts = await client.fetch(query);
    setPosts(posts);
  };
  const getCategories = async () => {
    const query = '*[_type == "category"]';
    const categories = await client.fetch(query);
    setCategories(categories);
  };
  const getGenders = async () => {
    const query = '*[_type == "gender"]';
    const genders = await client.fetch(query);
    setGenders(genders);
  };

  function getProductWithSelectedSize(product, productSize) {
    const selectedSize = product.sizes.find(size => size === productSize);
  
    if (!selectedSize) {
      return null;
    }
  
    return { ...product, productSizes: [selectedSize] };
  }
  function addCart(product, productSize) {
  const selectedProduct = getProductWithSelectedSize(product, productSize);

  if (!selectedProduct) {
    return;
  }

  setCart(prevCart => [...prevCart, selectedProduct]);
}

  useEffect(() => {
    getProducts();
    getPosts();
    getCategories();
    getGenders();
  }, []);

  useEffect(() => {
    let filteredProducts = [...products];

    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category._ref === selectedCategory
      );
    }

    if (selectedGender !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.gender._ref === selectedGender
      );
    }
    if (selectedOption == "Popular") {
      filteredProducts = filteredProducts.map((product) => {
        const totalSales = product.sizes.reduce(
          (acc, size) => acc + size.sales,
          0
        );
        //reduce devuelve como resultado un valor unico

        return { ...product, totalSales };
      });

      filteredProducts.sort((a, b) => b.totalSales - a.totalSales);
    }
    if(selectedOption == 'Higher Price'){
      filteredProducts.sort((a, b) => b.maxPrice - a.maxPrice);
    }
    if(selectedOption == 'Lower Price'){
      filteredProducts.sort((a, b) => a.maxPrice - b.maxPrice);
    }
    setFilteredProducts(filteredProducts);
  }, [selectedCategory, selectedGender, products, selectedOption]);

  return (
    <StateContext.Provider
      value={{
        products,
        getProducts,
        filteredProducts,
        posts,
        getPosts,
        categories,
        setCategories,
        genders,
        setGenders,
        product,
        setProduct,
        getProduct,
        selectedCategory,
        setSelectedCategory,
        selectedGender,
        setSelectedGender,
        selectedOption,
        setSelectedOption,
        options,
        cart,
        setCart,
        error,
        setError,
        addCart,
        userResponse,
        setUserResponse,
        facebookResponse,
        setFacebookResponse
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export function AppContext() {
  return useContext(StateContext);
}
