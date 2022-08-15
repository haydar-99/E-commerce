import {  AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'


function Navbar({addedItems}) {
  return (
    <Box >
        { console.log(addedItems.length)}
       <AppBar position='fixed' color='inherit'  >
            <Toolbar>
                <Typography variant='h5' >
                    <img src='' alt='' height="25px" />
                    Store project
                </Typography>
                <div/>
                <div>
                    <IconButton color='inherit'>
                        <Badge badgeContent={addedItems.length} color='secondary' >
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