import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Products from './components/products/Products'
const products = [
        {name: "...", id :0 , image:  "logo" , price: 1, description: "This is a product" },
        {name: "...", id :1 , image:  "logo" , price: 3, description: "This is a product" },
        {name: "...", id :2 , image:  "logo" , price: 3, description: "This is a product" },
        {name: "...", id :2 , image:  "logo" , price: 3, description: "This is a product" }
    ];

export const stateContext  = createContext();    
const App = () => {
  
  const [shoppedItems, setShoppedItems ] = useState([])
  const handleClick = (item, shoppedItems)=>{
    setShoppedItems( ()=>  [...shoppedItems, item])
    
}

  
  return (
    <stateContext.Provider value ={{shoppedItems, handleClick }}> 
    <div>
        <Navbar  />
        <Products Products = {products}  />
    </div>
    </stateContext.Provider>
   
  )
}

export default App