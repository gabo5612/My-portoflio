import React from "react";
import './Styles/LeftSide.css';

function LeftSide(props){
    return(
       <div className="LeftSide">
        {props.children}
       </div>
    )
}
export {LeftSide}