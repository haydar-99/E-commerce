import {  AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import { BorderAll, ShoppingBasket } from '@material-ui/icons'
import React, { useContext } from 'react'
import {stateContext} from "../../App"
import { stys } from './NavBarStyling'
import cartimage from "../../assets/cartImage.jpg"



//do styled components instead


function Navbar() {
    const {shoppedItems} = useContext(stateContext);
  return (
    <Box >
       <AppBar position='fixed' color='inherit'   style={stys.Appbar} >
            <ul  style={stys.navbarUl} >
             <li style={stys.navLi} >
                <Typography variant='h5'   >
                    <img style={{height:"30px", marginTop:"5px"}} src= {cartimage} alt='' height="25px" />
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