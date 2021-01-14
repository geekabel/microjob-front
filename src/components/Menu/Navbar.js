import React from 'react';
import {NavLink} from "react-router-dom";
import DIY from "../../assets/images/diy.png"
const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                <img src={DIY} alt="logo DIY"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link" >Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                     <NavLink to="/microjob" exact className="nav-link" >microservices</NavLink>
                    </li>
                    <li className="nav-item">
                     <NavLink to="/Contact" exact className="nav-link" >Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
)


export default navbar;
