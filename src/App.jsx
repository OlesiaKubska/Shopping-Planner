import { useState, useContext, useEffect } from "react";
import styles from "./App.module.scss";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import ProductsList from "./components/ProductsList/ProductsList";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import { ProductsContext } from "./context/ProductsContext";

function App() {
 const [shoppingList, setShoppingList] = useState(() => {
  const saved = localStorage.getItem("shoppingList");
  return saved ? JSON.parse(saved) : [];
 });

 const { setFilter } = useContext(ProductsContext);

 useEffect(() => {
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
 }, [shoppingList]);

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

 const clearShoppingList = () => {
  setShoppingList([]);
  localStorage.removeItem("shoppingList");
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
    clearShoppingList={clearShoppingList}
   />
  </div>
 );
}

export default App;
