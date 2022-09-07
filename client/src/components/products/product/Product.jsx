import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core'
import {ShoppingCart, Euro} from "@material-ui/icons"
import React, {   useContext} from 'react'
import { stateContext } from '../../../App'
import bild from "../../../assets/logo192.png"
import css from "./product.module.css"
const Product = ({product  }) => {
  
  const {handleClick,shoppedItems } = useContext(stateContext)

  return (
    <Card className={css.card}>
      <div className={css.imgDiv} style={{backgroundImage:`${bild} `}}> </div>
      <CardContent>
        <div className={css.cardContent}>
          <Typography variant='h6' gutterBottom>
                      {product.Name}
          </Typography>

          <Typography variant='h4'>
                      {product.Price}<Euro></Euro>
          </Typography>

          <Typography variant='h8' color='textSecondary'>{product.Description}
          </Typography>
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