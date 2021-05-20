import React, { useState } from 'react';
import items from './data';
import ShoppingList from './ShoppingList';
import Categories from './Categories';
import './App.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [shoppingItems, setShoppingItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filteredItems = (category) => {
    if (category === 'all') {
      setShoppingItems(items);
      return;
    } 
    const newItems = items.filter((item) => category === item.category);
    setShoppingItems(newItems);
  }
  
  return (
    <div className="App">
      <h1 className="title">Our Menu</h1>

      <Categories categories={categories} filteredItems={filteredItems}/>

      <div className="container">
        <ShoppingList shoppingItems={shoppingItems}/>
      </div>
    </div>
  );
}

export default App;
