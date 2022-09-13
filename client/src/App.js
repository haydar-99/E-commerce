import React, { createContext, useState , useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Products from './components/products/Products'
import { fetchtProducts } from './api';
import Navigationbar from './components/Navbar/Navigationbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import cs from "./cs.module.css"
export const stateContext  = createContext();  



const App =  () => {
  const [pre, setPre] = useState([]);
  const [shoppedItems, setShoppedItems ] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); console.log("the canvas is open");
  const [show, setShow] = useState(false);

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
    <stateContext.Provider  value ={{shoppedItems, handleClick }}> 
    <div >
    {console.log("this is pre" + pre.length)}
        <Navigationbar/>
        {/* <Navbar  /> */}
        <Products Products = {pre}  />
       
    </div>
    </stateContext.Provider>
   
  )
}

export default App