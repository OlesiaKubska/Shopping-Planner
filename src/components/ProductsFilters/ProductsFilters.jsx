import { useState } from "react";
import PropTypes from "prop-types";
import categories from "../../common/consts/categories";
import styles from "./ProductsFilters.module.scss";

function ProductsFilters({ setFilter }) {
 const [nameFilter, setNameFilter] = useState("");
 const [categoryFilter, setCategoryFilter] = useState("");

 const handleNameChange = (e) => {
  setNameFilter(e.target.value);
 };

 const handleCategoryChange = (e) => {
  setCategoryFilter(e.target.value);
 };

 const handleSearch = () => {
  setFilter({ name: nameFilter, category: categoryFilter });
 };

 return (
  <div className={styles.FiltersWrapper}>
   <div>Products Filters</div>
   <input
    type="text"
    placeholder="Search by name..."
    value={nameFilter}
    onChange={handleNameChange}
   />
   <select value={categoryFilter} onChange={handleCategoryChange}>
    <option value="">All Categories</option>
    {categories.map((category, index) => (
     <option key={index} value={category}>
      {category}
     </option>
    ))}
   </select>
   <button onClick={handleSearch}>Search</button>
  </div>
 );
}

ProductsFilters.propTypes = {
 setFilter: PropTypes.func.isRequired,
};

export default ProductsFilters;
