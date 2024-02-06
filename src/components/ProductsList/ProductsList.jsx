import { useContext } from "react";
import PropTypes from "prop-types";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { ProductsContext } from "../../context/ProductsContext";

function ProductsList({ addToShoppingList }) {
 const { filteredProducts } = useContext(ProductsContext);

 return (
  <div className={commonColumnsStyles.AppHeader}>
   <h3>Products list</h3>
   <ul className={commonColumnsStyles.List}>
    {filteredProducts.map((product, index) => (
     <li key={index} onClick={() => addToShoppingList(product.name)}>
      {`${product.name}`}
     </li>
    ))}
   </ul>
  </div>
 );
}

ProductsList.propTypes = {
 addToShoppingList: PropTypes.func.isRequired,
};

export default ProductsList;
