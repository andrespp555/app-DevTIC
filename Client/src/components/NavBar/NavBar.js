import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar(){
    return(
        <div>
            <div className="row">
                <div className="col pt-4 bg-warning">
                    <h3 className="text-center">Sistema de Ventas WEB .:APP:.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 p-0">
                    <nav className="sidebar">
                        <NavLink exact to="/Inicio">DevTIC22</NavLink>
                        <NavLink exact to="/Products">Productos</NavLink>
                        <NavLink exact to="/Ventas">Ventas</NavLink>
                        <NavLink exact to="/Admin">Administrar</NavLink>
                    </nav>
                </div>
            </div>
            
        </div>
    )
}