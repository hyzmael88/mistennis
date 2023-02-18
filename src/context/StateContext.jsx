import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/client";

const StateContext = createContext();

export function StateContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [cart, setCart] = useState([]);
  /*   console.log(cart)
   */
  //store
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const options = ["Recent", "Popular", "Higher Price", "Lower Price"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  //Auth
  const [error, setError] = useState(null);
  const [userResponse, setUserResponse] = useState(null);
  const [facebookResponse, setFacebookResponse] = useState(null);
  const [facebookUser, setFacebookUser] = useState(null);
  console.log(facebookUser);

  //Home
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
  const getFacebookUser = async (id) => {
    console.log("id dentro de getFacebooUser", id);
    const query = `*[_type == "facebookUser" && facebookId == $id]`;
    const params = { id };
    const user = await client.fetch(query, params);
    console.log("dentro de getFacebookUser", user);

    if (user.length == 0) {
      console.log("no encontré el usuario");
      return null;
    } else {
      console.log("encontré el usuario:", user);
      return user;
    }
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

  //Cart
  function getProductWithSelectedSize(product, productSize) {
    const selectedSize = product.sizes.find((size) => size === productSize);

    if (!selectedSize) {
      return null;
    }

    return { ...product, productSizeSelected: [selectedSize] };
  }
  function addCart(product, productSize) {
    /*  const selectedProduct = getProductWithSelectedSize(product, productSize);

    if (!selectedProduct) {
      return;
    }

    setCart((prevCart) => [...prevCart, selectedProduct]); */
  }

  //Home
  useEffect(() => {
    getProducts();
    getPosts();
    getCategories();
    getGenders();
  }, []);

  //Auth
  function createFacebookUser(userResponse) {
    client
      .create({
        _type: "facebookUser",
        name: userResponse?.name,
        email: userResponse?.email,
        facebookId: userResponse?.id,
        picture: userResponse?.picture.data.url,
        cart: [],
        registerDate: new Date(),
      })
      .then((result) => {
        console.log("Successfully created user", result);
      })
      .catch((error) => {
        console.error("Error creating user", error);
      });
  }

  useEffect(() => {
    console.log(userResponse);
    if (userResponse) {
      console.log("entre al if");
      // Intenta buscar al usuario en la base de datos
      getFacebookUser(userResponse.id).then((result) => {
        if (result) {
          // Si se encontró al usuario, lo guardamos en el estado y en el local storage
          console.log(result[0]);
          setFacebookUser(result[0]);
          localStorage.setItem("facebookUser", JSON.stringify(result[0]));
        } else {
          createFacebookUser(userResponse);

          setFacebookUser(userResponse);
          localStorage.setItem("facebookUser", JSON.stringify(userResponse));
        }
      });
    }
  }, [userResponse]);

  //Store
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
    if (selectedOption == "Higher Price") {
      filteredProducts.sort((a, b) => b.maxPrice - a.maxPrice);
    }
    if (selectedOption == "Lower Price") {
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
        setFacebookResponse,
        facebookUser,
        setFacebookUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export function AppContext() {
  return useContext(StateContext);
}
