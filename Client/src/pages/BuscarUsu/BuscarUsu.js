import React, { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';

export default function BuscarUsu(){
    //list
    const [usuarios, set_usuario] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3977/api/V1/usuario/listar`).then((res) =>{
            console.log(res.data.usuario)
            set_usuario(res.data.usuario)
        });
    }, [])
    //delete
    const delete_usuario = (_id) => {
        axios.delete(`http://localhost:3977/api/V1/usuario/borrar/`+_id).then((res) =>{
            alert('Dato borrado correctamente');
            window.location.reload(true);
        })
    }

    //Update
    const [id_u, set_id] = useState(0);
    const [nam_usuario, set_nam_usuario] = useState("");
    const [las_usuario, set_las_usuario] = useState("");
    const [ema_usuario, set_ema_usuario] = useState("");
    const [pass_usuario, set_pass_usuario] = useState("");
    const [rol_usuario, set_rol_usuario] = useState("");
    const [act_usuario, set_act_usuario] = useState("");

    const update_usuario = (_id) =>{
        axios.put(`http://localhost:3977/api/V1/usuario/actualizar`, {
            _id: _id,
            name: nam_usuario,
            lastname: las_usuario,
            email: ema_usuario,
            password: pass_usuario,
            role: rol_usuario,
            active: act_usuario
        })
        window.location.reload(true);
    }
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto">         
                    <div className="pt-3">
                        <div>
                            <h3>Módulo Administrador</h3>
                            <h6>Buscar Usuario</h6>
                            <hr/>
                        </div>

                        <div>     
                            <table className="table table-dark table-striped">
                                <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>Rol</th>
                                    <th>Estado</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                </tr>
                                </thead>

                                <tbody>

                                {
                                    usuarios.map(value =>( 
                                        <tr>
                                            <td>{value.name}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.email}</td>
                                            <td>{value.role}</td>
                                            <td>{value.active}</td>
                                            <td>
                                                <button className="btn btn-success" onClick = {() => { 
                                                set_id(value._id);
                                                set_nam_usuario(value.name);
                                                set_las_usuario(value.lastname);
                                                set_ema_usuario(value.email);
                                                set_pass_usuario(value.password);
                                                set_rol_usuario(value.role);
                                                set_act_usuario(value.active);
                                                document.getElementById('name').defaultValue = value.name;
                                                document.getElementById('lastname').defaultValue = value.lastname;
                                                document.getElementById('email').defaultValue = value.email;
                                                document.getElementById('role').defaultValue = value.role;
                                                document.getElementById('active').defaultValue = value.active;
                                                //document.getElementById('estado').defaultValue = value.estado;
                                                }}><FaPenAlt/></button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => delete_usuario(value._id)}>
                                                <FaTrashAlt />
                                                </button>
                                            </td> 
                                            </tr>
                                        
                                    ))
                                }

                                
                                </tbody>
                            </table>

                        </div>





                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>Rol</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <input type="text" placeholder="Nombre" className="form-control form-control-sm" name="name" id="name" onChange={(e) => {set_nam_usuario(e.target.value);}}/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Apellido" className="form-control form-control-sm" name="lastname" id="lastname" onChange={(e) => {set_las_usuario(e.target.value);}}/>
                                </td>
                                <td>
                                    <input type="text" placeholder="E-mail" className="form-control form-control-sm" name="email" id="email" onChange={(e) => {set_ema_usuario(e.target.value);}}/>
                                </td>
                                <td>
                                    <select className="form-control form-control-sm" name="role" id="role" onChange={(e) => {set_rol_usuario(e.target.value);}}>
                                        <option selected disabled>Seleccione</option>
                                        <option value="vendedor">Vendedor</option>
                                        <option value="administrador">Administrador</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-control form-control-sm" name="active" id="active" onChange={(e) => {set_act_usuario(e.target.value);}}>
                                        <option selected disabled>Seleccione</option>
                                        <option value="activo">Activo</option>
                                        <option value="inactivo">Inactivo</option>
                                    </select>
                                </td>
                            </tr>
                            
                            </tbody>
                            <div className="input-group mb-3">
                                    <button className="btn btn-success m-1" onClick={() => {update_usuario(id_u)}}>Actializar</button> 
                            </div>
                        </table>





                    </div>
                </div>
                
            </div>
        </div>
    )
}

