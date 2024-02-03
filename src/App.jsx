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

 const addToShoppingList = (name) => {
  setShoppingList((prev) => [...prev, name]);
 };

 const removeFromShoppingList = (name) => {
  setShoppingList((prev) => prev.filter((item) => item !== name));
 };

 return (
  <div className={styles.appWrapper}>
   <AddProducts />
   <ProductsFilters setFilter={setFilter} />
   <div className={styles.columnsWrapper}>
    <ProductsList
     products={filteredProducts}
     addToShoppingList={addToShoppingList}
    />
    <ShoppingList
     shoppingList={shoppingList}
     removeFromShoppingList={removeFromShoppingList}
    />
   </div>
  </div>
 );
}

export default App;
