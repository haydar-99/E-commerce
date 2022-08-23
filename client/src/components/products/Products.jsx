import React from 'react'
import {Grid} from "@material-ui/core"
import Product from './product/Product';
import logo from "../../assets/cartImage.jpg"



const Products = ({Products}) => {
    

   
    
  return (
    <div  style={{ marginTop: "100px"}}>
        <Grid container justifyContent ='center' spacing={3} >
            {
                Products.map( (product, index ) =>  (
                    <Grid item key={index}>
                        <Product  product={product}  />
                    </Grid>
                ))
            }

        </Grid>
    </div>
  )
}

export default Products