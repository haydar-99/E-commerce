import React, { createContext, useState , useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Products from './components/products/Products'
import { fetchtProducts } from './api';
export const stateContext  = createContext();    
const App =  () => {
  const [pre, setPre] = useState([]);
  const [shoppedItems, setShoppedItems ] = useState([])
  const handleClick = (item, shoppedItems)=>{
    setShoppedItems( ()=>  [...shoppedItems, item])   
  }



useEffect(  () => {
  
  async function fetchData(){
    const respone = await fetchtProducts.then((reslt)=>{
      setPre(...pre, reslt);
    }).catch((e)=>{
      console.log(e);
    })
  }
  fetchData();  
},[])




  return (
    <stateContext.Provider value ={{shoppedItems, handleClick }}> 
    <div>
    {console.log("this is pre" + pre.length)}
        <Navbar  />
        <Products Products = {pre}  />
    </div>
    </stateContext.Provider>
   
  )
}

export default App