import { createContext, useState, useEffect } from "react";
import initialProducts from "../common/consts/products";

export const ProductsContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
 const [products, setProducts] = useState(() => {
  const localProducts = localStorage.getItem("products");
  return localProducts ? JSON.parse(localProducts) : initialProducts;
 });
 const [filteredProducts, setFilteredProducts] = useState(products);
 const [filter, setFilter] = useState({
  name: "",
  category: "",
  isFoodOnly: false,
 });

 useEffect(() => {
  //   console.log("Updating filters:", filter);
  const filtered = products.filter((product) => {
   return (
    (filter.name
     ? product.name.toLowerCase().includes(filter.name.toLowerCase())
     : true) &&
    (filter.category ? product.category === filter.category : true) &&
    (!filter.isFoodOnly || (filter.isFoodOnly && product.foodProduct))
   );
  });
  setFilteredProducts(filtered);
 }, [filter, products]);

 useEffect(() => {
  localStorage.setItem("products", JSON.stringify(products));
 }, [products]);

 const addProduct = (newProduct) => {
  setProducts((prevProducts) => {
   const updatedProducts = [...prevProducts, newProduct];
   //    console.log("Dodano produkt:", newProduct);
   //    console.log("Zaktualizowana lista produktów:", updatedProducts);
   return updatedProducts;
  });
 };

 return (
  <ProductsContext.Provider
   value={{ products, addProduct, filteredProducts, setFilter }}
  >
   {children}
  </ProductsContext.Provider>
 );
};
