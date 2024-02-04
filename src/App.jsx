import { useState, useEffect } from "react";
import styles from "./App.module.scss";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import ProductsList from "./components/ProductsList/ProductsList";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import products from "./common/consts/products";

function App() {
 const [shoppingList, setShoppingList] = useState([]);
 const [filteredProducts, setFilteredProducts] = useState(products);
 const [filter, setFilter] = useState({
  name: "",
  category: "",
  isFoodOnly: false,
 });

 useEffect(() => {
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
 }, [filter]);

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

   <ProductsList
    products={filteredProducts}
    addToShoppingList={addToShoppingList}
   />
   <ShoppingList
    shoppingList={shoppingList}
    removeFromShoppingList={removeFromShoppingList}
    togglePurchased={togglePurchased}
   />
  </div>
 );
}

export default App;
