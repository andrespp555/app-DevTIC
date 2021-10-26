import React from "react";
import AppRouter from "../../config/AppRouter";

import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/sidebar.css';


export default function homeA(){
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