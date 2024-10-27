import React from "react";
import './nav-button.css'
import '../colors.css'
function NavButton({buttonName}){
    return(

        <div className="home-option">{buttonName}</div>
    )
}
export default NavButton