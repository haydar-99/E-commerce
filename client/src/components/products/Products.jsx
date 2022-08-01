import React from 'react'
import {Grid} from "@material-ui/core"
import Product from './product/Product';


const Products = () => {
    const Products = [
        {name: "...", id :0 , image:  "....." },
        {name: "...", id :1 , image:  "....." },
        {name: "...", id :2 , image:  "....." }
    ];
  return (
    <div>
        <Grid container spacing={3} >
            {
                Products.map( (product) =>  (
                    <Grid item key={product.id}>
                        <Product/>
                    </Grid>
                ))
            }

        </Grid>
    </div>
  )
}

export default Products