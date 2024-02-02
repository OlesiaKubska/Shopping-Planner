import PropTypes from "prop-types";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ProductsList({ produkty, addToShoppingList }) {
 return (
  <div className={commonColumnsStyles.App}>
   <header className={commonColumnsStyles.AppHeader}>
    <p>Products list</p>
    <ul>
     {produkty.map((produkt, index) => (
      <li key={index} onClick={() => addToShoppingList(produkt.nazwa)}>
       {produkt.nazwa}
      </li>
     ))}
    </ul>
   </header>
  </div>
 );
}

ProductsList.propTypes = {
 produkty: PropTypes.array.isRequired,
 addToShoppingList: PropTypes.func.isRequired,
};

export default ProductsList;
