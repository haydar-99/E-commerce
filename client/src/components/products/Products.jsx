import React from 'react'
import {Grid} from "@material-ui/core"
import Product from './product/Product';
import logo from "../../assets/cartImage.jpg"



const Products = ({Products,handleClick, addedItems}) => {
    

   
    
  return (
    <div>
        <Grid container justifyContent ='center' spacing={3} >
            {
                Products.map( (product) =>  (
                    <Grid item key={product.id}>
                        <Product product={product} handleClick={handleClick} addedItems = {addedItems} />
                    </Grid>
                ))
            }

        </Grid>
    </div>
  )
}

export default Products