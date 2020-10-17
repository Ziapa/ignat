import React from "react";
import s from "./Errosr404.module.scss"
import {NavLink} from "react-router-dom";


function Error404() {
    return (
        <div>
            <div className={s.error404}>
                <div className={s.error404_item}>404</div>
                <div className={s.error404_item}>Page not found!</div>
                <div className={s.error404_item}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
                <div className={s.error404_item}>
                    <NavLink to={"/pre-junior"}>Back to Home</NavLink>
                </div>
            </div>
        </div>

    );
}

export default Error404;
