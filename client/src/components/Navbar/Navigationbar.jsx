import { header } from "./NavBarStyling";
import cs from "./cs.module.css";
import {
  AppBar,
  Badge,
  Box,
  Card,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { BorderAll, ShoppingBasket, Euro } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { stateContext } from "../../App";
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import bild from "../../assets/logo192.png"

function Navigationbar() {
  const { shoppedItems } = useContext(stateContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className={`${cs.header} `}>
      <div>
        <h2> The Logo</h2>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Something here</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      
      
      <div >
        <IconButton color="inherit"  onClick={()=>handleShow()}  className={cs.basket}>
          <Badge badgeContent={shoppedItems.length} color="secondary">
            <ShoppingBasket />
          </Badge>
        </IconButton>
        
        <Offcanvas className="offcanvas offcanvas-end" show={show}  placement="end"   onHide={()=>handleClose()}>
        <Offcanvas.Header className ="offcanvas-header" closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
          <hr></hr>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            shoppedItems.map((item)=> <Card className={cs.item}>
            <img src={bild}/>
            <h4>
                {item.Name}
            </h4>
            <h5>
                {item.Price + "€"}
            </h5>
            
            </Card>)
          }
         
        </Offcanvas.Body>
      </Offcanvas>

      </div>
    </header>
  );
}

export default Navigationbar;
