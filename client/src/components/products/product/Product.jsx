import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core'
import {ShoppingCart} from "@material-ui/icons"
import React, {   useContext} from 'react'
import { stateContext } from '../../../App'

const Product = ({product  }) => {
  
  const {handleClick,shoppedItems } = useContext(stateContext)

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
        <IconButton aria-label='Add to cart'  onClick={()=>handleClick(product, shoppedItems)}>
            <ShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product