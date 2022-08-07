import React from 'react'
import {Grid} from "@material-ui/core"
import Product from './product/Product';
import logo from "../../assets/cartImage.jpg"



const Products = () => {
    const Products = [
        {name: "...", id :0 , image:  logo , price: 3, description: "This is a product" },
        {name: "...", id :1 , image:  logo , price: 3, description: "This is a product" },
        {name: "...", id :2 , image:  logo , price: 3, description: "This is a product" },
        {name: "...", id :2 , image:  logo , price: 3, description: "This is a product" }
    ];
    
  return (
    <div>
        <Grid container justifyContent ='center' spacing={3} >
            {
                Products.map( (product) =>  (
                    <Grid item key={product.id}>
                        <Product product={product}/>
                    </Grid>
                ))
            }

        </Grid>
    </div>
  )
}

export default Products