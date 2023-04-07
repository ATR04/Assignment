import React from "react";
import Data from "./API/CONTENTLISTINGPAGE-PAGE1.json";
import './index.css';

function Title(){
    
    return(
        <h1 className="heading">{Data.page.title}</h1>
    )
}

export default Title;
