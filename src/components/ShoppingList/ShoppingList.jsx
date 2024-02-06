import PropTypes from "prop-types";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ShoppingList({
 shoppingList,
 removeFromShoppingList,
 togglePurchased,
}) {
 return (
  <div className={commonColumnsStyles.AppHeader}>
   <h3>Shopping List</h3>
   <ul className={commonColumnsStyles.List}>
    {shoppingList.map((item, index) => (
     <li
      key={index}
      style={{ textDecoration: item.purchased ? "line-through" : "none" }}
      onContextMenu={(event) => {
       event.preventDefault();
       togglePurchased(index);
      }}
      onClick={() => removeFromShoppingList(index)}
     >
      {item.name}
     </li>
    ))}
   </ul>
  </div>
 );
}

ShoppingList.propTypes = {
 shoppingList: PropTypes.arrayOf(
  PropTypes.shape({
   name: PropTypes.string.isRequired,
   purchased: PropTypes.bool.isRequired,
  })
 ).isRequired,
 removeFromShoppingList: PropTypes.func.isRequired,
 togglePurchased: PropTypes.func.isRequired,
};

export default ShoppingList;
