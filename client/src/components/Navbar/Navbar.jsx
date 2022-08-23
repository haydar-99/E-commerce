import {  AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import { BorderAll, ShoppingBasket } from '@material-ui/icons'
import React, { useContext } from 'react'
import {stateContext} from "../../App"


const styles ={
    navbarUl:{ 
        margin: "0",
        padding: "0",
        listStyleType: "none",
        alignItems: "center"}
}

function Navbar() {
    const {shoppedItems} = useContext(stateContext);
  return (
    <Box >
        
         {console.log(shoppedItems)}
        { console.log("this is the " + shoppedItems.length)}
       <AppBar position='fixed' color='inherit'    >
            <ul style={styles.navbarUl}>
             <li>
                <Typography variant='h5'   >
                    <img src='' alt='' height="25px" />
                    Store project
                </Typography>
             </li>
               <li><div  /></li> 
                <li>
                <div >
                    <IconButton color='inherit' >
                        <Badge badgeContent={shoppedItems.length} color='secondary' >
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