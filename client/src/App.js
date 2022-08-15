import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Products from './components/products/Products'
const products = [
        {name: "...", id :0 , image:  "logo" , price: 1, description: "This is a product" },
        {name: "...", id :1 , image:  "logo" , price: 3, description: "This is a product" },
        {name: "...", id :2 , image:  "logo" , price: 3, description: "This is a product" },
        {name: "...", id :2 , image:  "logo" , price: 3, description: "This is a product" }
    ];
const App = () => {
  const [addedItems, setAddedItems] = useState([]);
  const handleClick = (item, addedItems)=>{
    setAddedItems( ()=>  [...addedItems, item])
    
}
  
  return (
    <div>
        <Navbar addedItems={addedItems} />
        <Products Products = {products} addedItems= {addedItems} handleClick={handleClick} />
    </div>
  )
}

export default App