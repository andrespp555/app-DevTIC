import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Admin(){

    function handleOnsubmit(e){
        e.preventDefault();

        const userSchema = {
            name: e.target.name.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            repeatPassword: e.target.repeatPassword.value,
            role: e.target.role.value,
            active: e.target.active.value
        };

        axios.post(`http://localhost:3977/api/V1/sign-up`, userSchema).then(res => {alert( 'Datos del usuario agregados' + e.target.name.value + '\n' + e.target.lastname.value + '\n' + e.target.email.value + '\n' + e.target.password.value + '\n' + e.target.repeatPassword.value + '\n' + e.target.role.value + '\n' + e.target.active.value);})

        
    }

    return(
        <div className="container">
            <div className="row">
                {/* Contenedor*/}
                <div className="col-md-10 mx-auto">         
                    <div className="pt-3">
                        <div>
                            <h3>Módulo Administrador</h3>
                            <h6>Registrar Usuarios</h6>
                            <hr/>
                        </div>

                        <nav>
                            <NavLink exact to="/BuscarUsu" className="btn btn-warning m-1">Buscar Usuario</NavLink>
                        </nav>

                        <hr />

                        <div>    
                            <form onSubmit = {handleOnsubmit}>
                                <div className="grid grid-2">
                                    <input type="text" placeholder="Nombre" name="name" id="name" required className="form-control form-control-sm"/><br/>

                                    <input type="text" placeholder="Apellido" name="lastname" id="lastname" required className="form-control form-control-sm"/><br/>

                                    <input type="email" placeholder="E-mail" name="email" id="email" required className="form-control form-control-sm"/><br/>

                                    <input type="password" placeholder="Clave" name="password" id="password" required className="form-control form-control-sm"/><br/>

                                    <input type="password" placeholder="Repita Clave" name="repeatPassword" id="repeatPassword" required className="form-control form-control-sm"/><br/>

                                    <select className="form-control form-control-sm" name="role" id="role">
                                            <option value="vendedor">Vendedor</option>
                                            <option value="administrador">Administrador</option>
                                    </select><br/>

                                    <select className="form-control form-control-sm" name="active" id="active">
                                            <option value="activo">Activo</option>
                                            <option value="inactivo">Inactivo</option>
                                    </select><br/>

     
                                    <button type="submit" className="btn btn-warning m-1">
                                        Registrar
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    )
}

