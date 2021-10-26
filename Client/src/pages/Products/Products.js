import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';

export default function Products(){
    //list
    const [productos, set_products] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3977/api/V1/producto/listar`).then((res) =>{
            console.log(res.data.producto)
            set_products(res.data.producto)
        });
    }, [])
    //delete
    const delete_producto = (_id) => {
        axios.delete(`http://localhost:3977/api/V1/producto/borrar/`+_id).then((res) =>{
            alert('Dato borrado correctamente');
            window.location.reload(true);
        })
    }
    //Update
    const [id_p, set_id] = useState(0);
    const [id_producto, set_id_producto] = useState(0);
    const [des_producto, set_des_producto] = useState("");
    const [val_producto, set_val_producto] = useState(0);
    const [est_producto, set_est_producto] = useState("");

    const update_producto = (_id) =>{
        axios.put(`http://localhost:3977/api/V1/producto/actualizar`, {
            _id: _id,
            idProducto: id_producto,
            descripcion: des_producto,
            valor: val_producto,
            estado: est_producto
        })
    }

    return(
        <div className="container">
            <div className="row">
                {/* Contenedor*/}
                <div className="col-md-10 mx-auto">         
                    <div className="pt-3">
                        <h3>Módulo Productos</h3>
                        <h6>Buscar Producto</h6>
                        <hr/>
                        <nav>
                            <NavLink exact to="/RegistrarProducto" className="btn btn-warning m-1">Nuevo Producto</NavLink>
                        </nav>
                        <hr />

                        <div>

                        <br/>

                        <table className="table table-dark table-striped">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Descripción</th>
                                <th>Val.Unit</th>
                                <th>Estado</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                            </thead>

                            <tbody>
                            {
                                productos.map(value =>(
                                    <tr>
                                        <td>
                                            {value.idProducto}
                                        </td>
                                        <td>
                                            {value.descripcion}
                                        </td>
                                        <td>
                                            {value.valor}
                                        </td>
                                        <td>
                                            {value.estado}
                                        </td>
                                        <td>
                                        <button className="btn btn-success"  onClick = {() => { 
                                            set_id(value._id);
                                            set_id_producto(value.idProducto);
                                            set_des_producto(value.descripcion);
                                            set_val_producto(value.valor);
                                            set_est_producto(value.estado);
                                            document.getElementById('idProducto').defaultValue = value.idProducto;
                                            document.getElementById('descripcion').defaultValue = value.descripcion;
                                            document.getElementById('valor').defaultValue = value.valor;
                                            //document.getElementById('estado').defaultValue = value.estado;

                                            }}><FaPenAlt/></button>
                                        </td>
                                        <td>
                                        <button className="btn btn-danger" onClick={() => delete_producto(value._id)}>
                                        <FaTrashAlt />
                                        </button>
                                        </td> 
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>

                        </div>
                                
                            <form >
                            <table className="table table-dark table-striped">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Descripción</th>
                                    <th>Val.Unit</th>
                                    <th>Estado</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="ID" className="form-control form-control-sm" name="idProducto" id="idProducto" onChange={(e) => {set_id_producto(e.target.value);}}/>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Descripción" className="form-control form-control-sm" name="descripcion" id="descripcion" onChange={(e) => {set_des_producto(e.target.value);}}/>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Valor" className="form-control form-control-sm" name="valor" id="valor" onChange={(e) => {set_val_producto(e.target.value);}}/>
                                    </td>
                                    <td>
                                        <select className="form-control form-control-sm" name="estado" id="estado" onChange={(e) => { set_est_producto(e.target.value);}}>
                                            <option selected disabled>Seleccione</option>
                                            <option value="disponible">Disponible</option>
                                            <option value="agotado">Agotado</option>
                                        </select>
                                    </td>
                                </tr>
                                </tbody>
                                <div className="input-group mb-3">
                                    <button className="btn btn-success" onClick={() => {update_producto(id_p)}}>Actualizar</button>
                                </div>
                            </table>
                            </form> 


                    </div>
                </div>
                
            </div>
        </div>
    )
}