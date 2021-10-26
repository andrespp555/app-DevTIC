import React, { useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';
import { useEffect } from "react";


export default function BuscarVenta(){
    //list
    const [ventas, set_venta] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3977/api/V1/venta/listar`).then((res) =>{
            console.log(res.data.venta)
            set_venta(res.data.venta)
        });
    }, [])
    //delete
    const delete_venta = (_id) => {
        axios.delete(`http://localhost:3977/api/V1/venta/borrar/`+_id).then((res) =>{
            alert('Venta borrada correctamente');
            window.location.reload(true);
        })
    }
    //Update
    const [id_v, set_id] = useState(0);
    const [p1_venta, set_p1_venta] = useState("");
    const [p2_venta, set_p2_venta] = useState("");
    const [p3_venta, set_p3_venta] = useState("");
    const [p4_venta, set_p4_venta] = useState("");
    const [c1_venta, set_c1_venta] = useState(0);
    const [c2_venta, set_c2_venta] = useState(0);
    const [c3_venta, set_c3_venta] = useState(0);
    const [c4_venta, set_c4_venta] = useState(0);
    const [v1_venta, set_v1_venta] = useState(0);
    const [v2_venta, set_v2_venta] = useState(0);
    const [v3_venta, set_v3_venta] = useState(0);
    const [v4_venta, set_v4_venta] = useState(0);
    const [tot_venta, set_tot_venta] = useState(0);
    const [est_venta, set_est_venta] = useState("");

    const update_venta = (_id) =>{
        axios.put(`http://localhost:3977/api/V1/venta/actualizar`, {
            _id: _id,
            producto: {
                p1:p1_venta,
                p2:p2_venta,
                p3:p3_venta,
                p4:p4_venta,
            },
            cantidad:{
                c1: c1_venta,
                c2: c2_venta,
                c3: c3_venta,
                c4: c4_venta,
            },
            valor:{
                v1: v1_venta,
                v2: v2_venta,
                v3: v3_venta,
                v4: v4_venta,
            },
            total: tot_venta,
            estado: est_venta
        })
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto">         
                    <div className="pt-3">
                        <div>
                            <h3>Módulo Ventas</h3>
                            <h6>Listar Venta</h6>
                        </div>
                        <hr/>
                        <table className="table table-dark table-striped">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Total</th>
                                <th>Estado</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                            </thead>

                            <tbody>
                            {
                                ventas.map(value =>(
                                    <tr>
                                        <td>
                                            {value.idventa}
                                        </td>
                                        <td>
                                            {value.fecha}
                                        </td>
                                        <td>
                                            {value.total}
                                        </td>
                                        <td>
                                            {value.estado}
                                        </td>
                                        <td>
                                        <button className="btn btn-success" onClick = {() => { 
                                            set_id(value._id);
                                            set_p1_venta(value.producto.p1);
                                            set_p2_venta(value.producto.p2);
                                            set_p3_venta(value.producto.p3);
                                            set_p4_venta(value.producto.p4);
                                            set_c1_venta(value.cantidad.c1);
                                            set_c2_venta(value.cantidad.c2);
                                            set_c3_venta(value.cantidad.c3);
                                            set_c4_venta(value.cantidad.c4);
                                            set_v1_venta(value.valor.v1);
                                            set_v2_venta(value.valor.v2);
                                            set_v3_venta(value.valor.v3);
                                            set_v4_venta(value.valor.v4);
                                            set_tot_venta(value.total);
                                            set_est_venta(value.estado);
                                            document.getElementById('producto1').defaultValue = value.producto.p1;
                                            document.getElementById('producto2').defaultValue = value.producto.p2;
                                            document.getElementById('producto3').defaultValue = value.producto.p3;
                                            document.getElementById('producto4').defaultValue = value.producto.p4;
                                            document.getElementById('cantidad1').defaultValue = value.cantidad.c1;
                                            document.getElementById('cantidad2').defaultValue = value.cantidad.c2;
                                            document.getElementById('cantidad3').defaultValue = value.cantidad.c3;
                                            document.getElementById('cantidad4').defaultValue = value.cantidad.c4;
                                            document.getElementById('valor1').defaultValue = value.valor.v1;
                                            document.getElementById('valor2').defaultValue = value.valor.v2;
                                            document.getElementById('valor3').defaultValue = value.valor.v3;
                                            document.getElementById('valor4').defaultValue = value.valor.v4;
                                            document.getElementById('total').defaultValue = value.total;
                                            document.getElementById('estado').defaultValue = value.estado;

                                            }}>
                                            <FaPenAlt/>
                                        </button>
                                        </td>
                                        <td>
                                        <button className="btn btn-danger" onClick={() => delete_venta(value._id)}>
                                            <FaTrashAlt />
                                        </button>
                                        </td> 
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        <div>

                        <form>
                        <table className="table table-dark table-striped">
                            <thead>
                            <tr>
                                <th>ID Venta</th>
                                <th>Estado</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" placeholder="Id Venta" className="form-control form-control-sm"/>
                                </td>
                                <td>
                                    <select className="form-control form-control-sm" name="estado" id="estado" onChange={(e) => {set_est_venta(e.target.value);}}>
                                        <option selected disabled>Seleccione</option>
                                        <option value="entregado">Entregado</option>
                                        <option value="pendiente">Pendiente</option>
                                        <option value="cancelado">Cancelado</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Productos</th>
                                <th>Cantidad</th>
                                <th>Val.Unit</th>
                            </tr>
                            </thead>
        
                            <tbody>
        
                            <tr>
                                <td>
                                    <input type="text" placeholder="Descripción" className="form-control form-control-sm" name="producto1" id="producto1" onChange={(e) => {set_p1_venta(e.target.value);}}/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Cantidad" className="form-control form-control-sm" name="cantidad1" id="cantidad1" onChange={(e) => {set_c1_venta(e.target.value);}}/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Val.Unit" className="form-control form-control-sm" name="valor1" id="valor1" onChange={(e) => {set_v1_venta(e.target.value);}}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" placeholder="Descripción" className="form-control form-control-sm" name="producto2" id="producto2" onChange={(e) => {set_p2_venta(e.target.value);}}/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Cantidad" className="form-control form-control-sm" name="cantidad2" id="cantidad2" onChange={(e) => {set_c2_venta(e.target.value);}}/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Val.Unit" className="form-control form-control-sm" name="valor2" id="valor2" onChange={(e) => {set_v2_venta(e.target.value);}}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" placeholder="Descripción" className="form-control form-control-sm" name="producto3" id="producto3" onChange={(e) => {set_p3_venta(e.target.value);}}/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Cantidad" className="form-control form-control-sm" name="cantidad3" id="cantidad3" onChange={(e) => {set_c3_venta(e.target.value);}}/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Val.Unit" className="form-control form-control-sm" name="valor3" id="valor3" onChange={(e) => {set_v3_venta(e.target.value);}}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" placeholder="Descripción" className="form-control form-control-sm" name="producto4" id="producto4" onChange={(e) => {set_p4_venta(e.target.value);}}/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Cantidad" className="form-control form-control-sm" name="cantidad4" id="cantidad4" onChange={(e) => {set_c4_venta(e.target.value);}}/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Val.Unit" className="form-control form-control-sm" name="valor4" id="valor4" onChange={(e) => {set_v4_venta(e.target.value);}}/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Val.Total
                                </td>
                                <td>
                                    <input type="text" placeholder="Total" className="form-control form-control-sm" name="total" id="total" onChange={(e) => {set_tot_venta(e.target.value);}}/>
                                </td>
                                <td></td>
                            </tr>
        
                            </tbody>
                            <div className="input-group mb-3">
                                    <button className="btn btn-success" onClick={() => {update_venta(id_v)}}>Actualizar</button>
                            </div>
                        </table>
                        </form>

                        </div>


                    </div>
                </div>
                
            </div>
        </div>
    )
}

