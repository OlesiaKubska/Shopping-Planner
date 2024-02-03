import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import categories from "../../common/consts/categories";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
// import styles from "./ProductsFilters.module.scss";

function ProductsFilters({ setFilter }) {
 const [nameFilter, setNameFilter] = useState("");
 const [categoryFilter, setCategoryFilter] = useState("");
 const [isFoodOnly, setIsFoodOnly] = useState(false);

 useEffect(() => {
  setFilter((prevFilter) => ({
   ...prevFilter,
   name: nameFilter.toLowerCase(),
   category: categoryFilter,
   isFoodOnly: isFoodOnly,
  }));
 }, [nameFilter, categoryFilter, isFoodOnly, setFilter]);

 return (
  <div className={commonColumnsStyles.AppHeader}>
   <div>Products Filters</div>
   <input
    type="text"
    placeholder="Search by name..."
    value={nameFilter}
    onChange={(e) => setNameFilter(e.target.value)}
   />
   <select
    value={categoryFilter}
    onChange={(e) => setCategoryFilter(e.target.value)}
   >
    <option value="">All Categories</option>
    {categories.map((category, index) => (
     <option key={index} value={category}>
      {category}
     </option>
    ))}
   </select>
   <label>
    <input
     type="checkbox"
     checked={isFoodOnly}
     onChange={(e) => setIsFoodOnly(e.target.checked)}
    />
    Food Product
   </label>
  </div>
 );
}

ProductsFilters.propTypes = {
 setFilter: PropTypes.func.isRequired,
};

export default ProductsFilters;
