import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core'
import {ShoppingCart} from "@material-ui/icons"
import React, { useState } from 'react'

const Product = ({product, handleClick, addedItems}) => {
  
  return (
    <Card>
      <CardMedia image={product.image} title= {product.name} />
      <CardContent>
        <div>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography>
            {product.price}
          </Typography>
          <Typography variant='h4' color='textSecondary'>{product.description}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton aria-label='Add to cart'  onClick={()=>handleClick(product, addedItems)}>
            <ShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product