import {header} from "./NavBarStyling"
import cs from "./cs.module.css"
import {  AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import { BorderAll, ShoppingBasket } from '@material-ui/icons'
import React, { useContext } from 'react'
import {stateContext} from "../../App"


function Navigationbar() {

    const {shoppedItems} = useContext(stateContext);

  return (
    <header className={`${cs.header} `}>
        <div>
        <h2> The Logo</h2>
        </div>
        
        <nav>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Something here</a></li>
                <li><a href='#'>About</a></li>
            </ul>

        </nav>
        <div  >
                    <IconButton color='inherit' className={cs.basket}  >
                        <Badge  badgeContent={shoppedItems.length} color='secondary'  >
                            <ShoppingBasket />
                        </Badge>
                    </IconButton>
                </div>
    </header>
  )
}

export default Navigationbar