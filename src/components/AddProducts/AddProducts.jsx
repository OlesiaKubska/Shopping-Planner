import { useState, useContext } from "react";
// import styles from "../../common/styles/Headers.module.scss";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { ProductsContext } from "../../context/ProductsContext";

function AddProducts() {
 const [name, setName] = useState("");
 const [category, setCategory] = useState("");
 const [isFoodProduct, setIsFoodProduct] = useState(false);

 const { addProduct } = useContext(ProductsContext);

 const handleSubmit = (event) => {
  event.preventDefault();
  addProduct({
   name,
   category,
   foodProduct: isFoodProduct,
  });
  // Resetowanie stanów
  setName("");
  setCategory("");
  setIsFoodProduct(false);
 };

 return (
  <div className={commonColumnsStyles.AppHeader}>
   <h3>Add products</h3>
   <form className={commonColumnsStyles.Form} onSubmit={handleSubmit}>
    <input
     type="text"
     placeholder="Name"
     value={name}
     onChange={(e) => setName(e.target.value)}
    />
    <input
     type="text"
     placeholder="Category"
     value={category}
     onChange={(e) => setCategory(e.target.value)}
    />
    <label>
     <input
      type="checkbox"
      checked={isFoodProduct}
      onChange={(e) => setIsFoodProduct(e.target.checked)}
     />
     Food product
    </label>
    <button type="submit">Add</button>
   </form>
  </div>
 );
}

export default AddProducts;
