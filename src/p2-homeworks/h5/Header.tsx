import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.scss"


function Header() {

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const onStyle = {
        display: collapsed ? "flex" : "none"
    }
    const offStyle = {
        display: collapsed ? "none" : "flex"
    }


    return (
        <div onClick={()=>{}} className={s.header}>
            <div style={offStyle} onClick={() => {setCollapsed(!collapsed)}} className={s.burgerMenu}>
                MENU
            </div>
            <div  style={onStyle} className={s.navBar}>
                <NavLink onClick={() => {setCollapsed(!collapsed)}} to={"/pre-junior"}>PreJunior</NavLink>
                <NavLink onClick={() => {setCollapsed(!collapsed)}} to={"/junior"}>Junior</NavLink>
                <NavLink onClick={() => {setCollapsed(!collapsed)}} to={"/junior-plus"}>JuniorPlus</NavLink>
            </div>
        </div>

    );
}

export default Header;
