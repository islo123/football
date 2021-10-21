import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import image from "./ValdrinLogo.jpeg"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiFillCloseCircle} from "react-icons/ai"

const Navbar = function (){

    const [show, setShow] = useState(true)

    return (
        <div>
            <div>
                <img className="logo" src={image} alt="logo"/>
            </div>         
            <div className="menu-btn">
                {show? <button onClick={function (){return setShow(false)}} className="show-btn"><GiHamburgerMenu/></button> : <button onClick={function (){return setShow(true)}} className="hide-btn"><AiFillCloseCircle/></button>}
            </div>
            <div className={show?"center": "center2"}>
                <ul className="flex-ul">
                    <li><NavLink exact={true} activeClassName="link2" className="link" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="link2" className="link"  to="players">Players</NavLink></li>
                    <li><NavLink activeClassName="link2" className="link"  to="about-us">Contact Us</NavLink></li>
                    <li><NavLink activeClassName="link2" className="link"  to="services">Services</NavLink></li>
                </ul>
            </div>
 
        </div>
    )
}

export default Navbar;