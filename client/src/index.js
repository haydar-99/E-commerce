import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createRoot } from 'react-dom/client';
import { Height } from "@material-ui/icons";

const root = createRoot(document.getElementById("root"));
root.render(

    <App />
)

