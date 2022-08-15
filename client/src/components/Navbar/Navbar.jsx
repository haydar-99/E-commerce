import {  AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import { ShoppingBasket } from '@material-ui/icons'
import React, { useContext } from 'react'
import {stateContext} from "../../App"

function Navbar() {
    const {shoppedItems} = useContext(stateContext);
  return (
    <Box >
        
        {console.log(shoppedItems)}
        { console.log("this is the " + shoppedItems.length)}
       <AppBar position='fixed' color='inherit'  >
            <Toolbar>
                <Typography variant='h5' >
                    <img src='' alt='' height="25px" />
                    Store project
                </Typography>
                <div/>
                <div>
                    <IconButton color='inherit'>
                        <Badge badgeContent={shoppedItems.length} color='secondary' >
                            <ShoppingBasket/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
       </AppBar>
       </Box>
  )
}

export default Navbar