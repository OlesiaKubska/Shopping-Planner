import { createContext, useState } from "react";
import initialProducts from "../common/consts/products";

export const ProductsContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
 const [products, setProducts] = useState(initialProducts);

 const addProduct = (product) => {
  setProducts([...products, product]);
 };

 return (
  <ProductsContext.Provider value={{ products, addProduct }}>
   {children}
  </ProductsContext.Provider>
 );
};
