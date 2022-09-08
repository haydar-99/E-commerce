import React from 'react'
import {Grid, CircularProgress} from "@material-ui/core"
import Product from './product/Product';
// import logo from "../../assets/cartImage.jpg"



const Products = ({Products}) => {
    

   
    
  return (
    <div  >
        {!Products.length ? <CircularProgress style={{marginTop:"50px", marginLeft:"800px"}}/>:
         <Grid style={{marginTop:"20px"}}  container justifyContent ='center' spacing={3} >
            {
                Products.map( (product, index ) =>  (
                    <Grid item key={index} style={{height:"310px", width:"300px"}} >
                        <Product  product={product}  />
                    </Grid>
                ))
            }

        </Grid>}
    </div>
  )
}

export default Products