import { useState, useContext } from "react";
import styles from "./App.module.scss";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import ProductsList from "./components/ProductsList/ProductsList";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import { ProductsContext } from "./context/ProductsContext";

function App() {
 const [shoppingList, setShoppingList] = useState([]);

 const { setFilter } = useContext(ProductsContext);

 const addToShoppingList = (productName) => {
  setShoppingList((prev) => [...prev, { name: productName, purchased: false }]);
 };

 const removeFromShoppingList = (index) => {
  setShoppingList((prev) => prev.filter((_, idx) => idx !== index));
 };

 const togglePurchased = (index) => {
  setShoppingList((currentList) =>
   currentList.map((item, idx) =>
    idx === index ? { ...item, purchased: !item.purchased } : item
   )
  );
 };

 return (
  <div className={styles.appWrapper}>
   <AddProducts />
   <ProductsFilters setFilter={setFilter} />
   <ProductsList addToShoppingList={addToShoppingList} />
   <ShoppingList
    shoppingList={shoppingList}
    removeFromShoppingList={removeFromShoppingList}
    togglePurchased={togglePurchased}
   />
  </div>
 );
}

export default App;
