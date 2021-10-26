import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/sidebar.css';


export default function Inicio(){
    return(
        /* Titulo */
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto">         
                    <div className="pt-3">
                        <h1>Bienvenido</h1><hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}