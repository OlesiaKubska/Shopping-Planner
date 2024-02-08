# Shopping-Planner
## Description
Shopping-Planner is an educational project designed to explore the use of React hooks and integration with Vite. The project allows users to plan their shopping by adding products to a shopping list, managing categories, and filtering products by various criteria.

## Technologies
- **React**: Utilizes hooks (useState, useEffect, useContext) for managing component states and global state.
- **React Context API**: Utilizes createContext and useContext hooks to manage and share global state across components without prop drilling. This is particularly useful for managing the products list, shopping list, and categories dynamically across the application.
- **Vite**: Efficient project building and development with support for hot module replacement.
- **SCSS Modules**: Local styling of components using SCSS Modules for style isolation.
## State Management and Context
The application's state management strategy revolves around the React Context API to provide a global state that can be accessed by any component within the app. Here's how it is implemented:
- **Creating a Context for Products**
  
 We use createContext to create a global context for managing products, which includes operations like adding new products, filtering products based on various criteria, and managing categories dynamically.
```import { createContext, useState, useContext } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  // State and functions to manage products
  // ...
  
  return (
    <ProductsContext.Provider value={{ /* state and functions */ }}>
      {children}
    </ProductsContext.Provider>
  );
};
```
- **Utilizing Context in Components**

Components can access and manipulate the global state using the useContext hook, simplifying state management across the application and improving code readability and maintainability.
```import { useContext } from 'react';
import { ProductsContext } from './context/ProductsContext';

const MyComponent = () => {
  const { products, addProduct } = useContext(ProductsContext);
  
  // Component logic
};
```
This approach significantly reduces the complexity of state management in large applications and facilitates communication between deeply nested components.
## Features
- **Adding Products**: Users can add products to the list, specifying the name, category, and whether the product is a food item.
- **Product Filtering**: Products can be filtered by name, category, or food characteristics.
- **Shopping List Management**: Products can be added to a shopping list, marked as purchased, and removed from the list.
## Getting Started
To run the project locally, follow these steps:

1. **Clone the repository**:
`git clone https://github.com/OlesiaKubska/Shopping-Planner.git`
`cd shopping-planner`
2. **Install dependencies**:
`npm install`
3. **Start the project**:
`npm run dev`

The project will be available at http://localhost:3000.

## License
This project is distributed under the MIT License.
