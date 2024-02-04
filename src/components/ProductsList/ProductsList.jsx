import { useContext } from "react";
import PropTypes from "prop-types";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { ProductsContext } from "../../context/ProductsContext";

function ProductsList({ addToShoppingList }) {
 const { products } = useContext(ProductsContext);
 //  console.log("Produkty do wyświetlenia:", products);
 return (
  <div className={commonColumnsStyles.App}>
   <header className={commonColumnsStyles.AppHeader}>
    <p>Products list</p>
    <ul>
     {products.map((product, index) => (
      <li key={index} onClick={() => addToShoppingList(product.name)}>
       {`${product.name}`}
      </li>
     ))}
    </ul>
   </header>
  </div>
 );
}

ProductsList.propTypes = {
 products: PropTypes.array.isRequired,
 addToShoppingList: PropTypes.func.isRequired,
};

export default ProductsList;
