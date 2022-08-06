import React from 'react'
import {Grid} from "@material-ui/core"
import Product from './product/Product';


const Products = () => {
    const Products = [
        {name: "...", id :0 , image:  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F004%2F999%2F463%2Foriginal%2Fshopping-cart-icon-illustration-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fshopping-cart-icon&tbnid=3o2OQEGe8vTipM&vet=12ahUKEwjA67G0srL5AhVEhP0HHcI6AKEQMygIegUIARDmAQ..i&docid=Ekq15ECXc5mVoM&w=1920&h=1597&q=Cart&hl=sv&ved=2ahUKEwjA67G0srL5AhVEhP0HHcI6AKEQMygIegUIARDmAQ" , price: 3, description: "This is a product" },
        {name: "...", id :1 , image:  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F004%2F999%2F463%2Foriginal%2Fshopping-cart-icon-illustration-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fshopping-cart-icon&tbnid=3o2OQEGe8vTipM&vet=12ahUKEwjA67G0srL5AhVEhP0HHcI6AKEQMygIegUIARDmAQ..i&docid=Ekq15ECXc5mVoM&w=1920&h=1597&q=Cart&hl=sv&ved=2ahUKEwjA67G0srL5AhVEhP0HHcI6AKEQMygIegUIARDmAQ" , price: 3, description: "This is a product" },
        {name: "...", id :2 , image:  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F004%2F999%2F463%2Foriginal%2Fshopping-cart-icon-illustration-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fshopping-cart-icon&tbnid=3o2OQEGe8vTipM&vet=12ahUKEwjA67G0srL5AhVEhP0HHcI6AKEQMygIegUIARDmAQ..i&docid=Ekq15ECXc5mVoM&w=1920&h=1597&q=Cart&hl=sv&ved=2ahUKEwjA67G0srL5AhVEhP0HHcI6AKEQMygIegUIARDmAQ" , price: 3, description: "This is a product" }
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