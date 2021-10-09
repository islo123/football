import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import image from "./ValdrinLogo.jpeg"

const Navbar = function (){

    const [show, setShow] = useState(true)
    const [hide, setHide] = useState(true)

    const getShow = function (){
        setShow(!show)
        if(!show === true){
           return setHide(true)
        }
    }
    const removeShow = function (){
        setShow(true)
        setHide(true)
    }

    return (
        <div>
            <div>
                <img className="logo" src={image} alt="logo"/>
            </div>
            <div className="center">
                <ul className="flex-ul">
                    <li><NavLink exact={true} activeClassName="link2" onClick={removeShow} className="link" to="/">Home</NavLink></li>
                    <li><NavLink onClick={removeShow} activeClassName="link2" className="link"  to="players">Players</NavLink></li>
                    <li><NavLink onClick={removeShow} activeClassName="link2" className="link"  to="about-us">Contact Us</NavLink></li>
                    <li><NavLink onClick={getShow} activeClassName="link2" className="link"  to="services">Services</NavLink></li>
                </ul>
            </div>
            <div className={show? "hide" : "show"}>
                <ul className="flex-ul2">
                    <li><button >Blog</button></li>
                    <li><button className={hide? "": "active-btn"} onClick={function (){return setHide(!hide)}}>Training Programs</button></li>
                    <li><button>Training Apparel</button></li>
                </ul>
            </div>
            <div className={hide? "hide": "show"}>
                <ul className="flex-ul2 ul3">
                    <li><button>1on1 Coaching</button></li>
                    <li><button>Gym Program</button></li>
                    <li><button>Nutrition Plan</button></li>
                </ul>
            </div>
        
        </div>
    )
}

export default Navbar;