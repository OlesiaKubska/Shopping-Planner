import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import PropTypes from "prop-types";

function ShoppingList({ shoppingList, removeFromShoppingList }) {
 const handleRightClick = (event, item) => {
  event.preventDefault();
  removeFromShoppingList(item);
 };

 return (
  <div className={commonColumnsStyles.App}>
   <header className={commonColumnsStyles.AppHeader}>
    <p>Shopping List</p>
    <ul>
     {shoppingList.map((item, index) => (
      <li key={index} onContextMenu={handleRightClick}>
       {item}
      </li>
     ))}
    </ul>
   </header>
  </div>
 );
}

ShoppingList.propTypes = {
 shoppingList: PropTypes.arrayOf(PropTypes.string).isRequired,
 removeFromShoppingList: PropTypes.func.isRequired,
};

export default ShoppingList;
