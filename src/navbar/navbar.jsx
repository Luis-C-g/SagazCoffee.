import React, { useState } from "react";
import "./navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="navbar">
            <img src="../src/assets/iconob.png" className="nav_logo"/>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#">Nosotros</a>
                <a href="#">Sagaz Coffee</a>
                <a href="#">Historia</a>
                <a href="#">Finca Voo</a>
                <a href="#">Contacto</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar