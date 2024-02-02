import { useState } from "react";
import styles from "./App.module.scss";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import ProductsList from "./components/ProductsList/ProductsList";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import produkty from "../src/common/consts/produkty";

function App() {
 const [shoppingList, setShoppingList] = useState([]);

 const addToShoppingList = (nazwa) => {
  setShoppingList((prev) => [...prev, nazwa]);
 };

 const removeFromShoppingList = (nazwa) => {
  setShoppingList((prev) => prev.filter((item) => item !== nazwa));
 };

 return (
  <div className={styles.appWrapper}>
   <AddProducts />
   <ProductsFilters />
   <div className={styles.columnsWrapper}>
    <ProductsList produkty={produkty} addToShoppingList={addToShoppingList} />
    <ShoppingList
     shoppingList={shoppingList}
     removeFromShoppingList={removeFromShoppingList}
    />
   </div>
  </div>
 );
}

export default App;
