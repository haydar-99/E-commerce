import {  AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import { BorderAll, ShoppingBasket } from '@material-ui/icons'
import React, { useContext } from 'react'
import {stateContext} from "../../App"
import { stys } from './NavBarStyling'



//do styled components instead


function Navbar() {
    const {shoppedItems} = useContext(stateContext);
  return (
    <Box >
       <AppBar position='fixed' color='inherit'   style={stys.Appbar} >
            <ul  style={stys.navbarUl} >
             <li style={stys.navLi} >
                <Typography variant='h5'   >
                    <img src='' alt='' height="25px" />
                    Store project
                </Typography>
             </li>
               <li style={stys.navLi}><div  /></li> 
                <li style={stys.navLi} style={stys.navLiBasket}>
                <div >
                    <IconButton color='inherit' >
                        <Badge  badgeContent={shoppedItems.length} color='secondary' >
                            <ShoppingBasket/>
                        </Badge>
                    </IconButton>
                </div>
                </li>
            </ul>
       </AppBar>
       </Box>
  )
}

export default Navbar