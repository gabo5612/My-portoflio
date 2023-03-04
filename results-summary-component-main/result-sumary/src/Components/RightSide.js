import React from "react";
import './Styles/RightSide.css';

function RightSide(props){
    return(
    <div className="RightSide">
        <h3>Summary</h3>
        <div>
            {props.children}
        </div>
    </div>
    )
}
export {RightSide}