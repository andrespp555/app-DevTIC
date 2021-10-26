import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


export default function Ventas(){

    function handleOnsubmit(e){
        e.preventDefault();


        const ventaSchema = {
            idventa: e.target.idventa.value,
            fecha: e.target.fecha.value,  
            producto: {
                p1:e.target.producto1.value,
                p2:e.target.producto2.value,
                p3:e.target.producto3.value,
                p4:e.target.producto4.value,

            },
            cantidad: {
                c1:e.target.cantidad1.value,
                c2:e.target.cantidad2.value,
                c3:e.target.cantidad3.value,
                c4:e.target.cantidad4.value,

            },
            valor: {
                v1:e.target.valor1.value,
                v2:e.target.valor2.value,
                v3:e.target.valor3.value,
                v4:e.target.valor4.value,

            },
            total: e.target.total.value,
            estado: e.target.estado.value
        };

        axios.post(`http://localhost:3977/api/V1/venta/agregar`, ventaSchema).then(res => {alert( 'Datos agregados');})

        
    }


    return(
        <div className="container">
            <div className="row">          
                <div className="col-md-10 mx-auto">         
                    <div className="pt-3">
                        <div>
                            <h3>Módulo Ventas</h3>
                            <h6>Registrar Venta</h6>
                        </div>
                        <hr/>
                        <nav>
                            <NavLink exact to="/BuscarVenta" className="btn btn-warning m-1">Buscar Venta</NavLink>
                        </nav>

                        <hr />
                        <form onSubmit = {handleOnsubmit}>
                        <table className="table table-dark table-striped">
                            <thead>
                            <tr>
                                <th>ID Venta</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" placeholder="ID Venta" className="form-control form-control-sm" name="idventa" id="idventa"/>
                                </td>
                                <td>
                                    <input type="date" placeholder="Fecha" className="form-control form-control-sm" name="fecha" id="fecha"/>
                                </td>
                                <td>
                                    <select className="form-control form-control-sm" name="estado" id="estado">
                                        <option selected disabled>Seleccione</option>
                                        <option value="entregado">Entregado</option>
                                        <option value="pendiente">Pendiente</option>
                                        <option value="cancelado">Cancelado</option>
                                    </select>
                                </td>

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
                                    <input type="text" placeholder="Descripción" className="form-control form-control-sm dato_prod" name="producto1"/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Cantidad" className="form-control form-control-sm dato_cant" name="cantidad1"/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Val.Unit" className="form-control form-control-sm dato_val" name="valor1"/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="text" placeholder="Descripción" className="form-control form-control-sm dato_prod" name="producto2"/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Cantidad" className="form-control form-control-sm dato_cant" name="cantidad2"/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Val.Unit" className="form-control form-control-sm dato_val" name="valor2"/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="text" placeholder="Descripción" className="form-control form-control-sm dato_prod" name="producto3"/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Cantidad" className="form-control form-control-sm dato_cant" name="cantidad3"/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Val.Unit" className="form-control form-control-sm dato_val" name="valor3"/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="text" placeholder="Descripción" className="form-control form-control-sm dato_prod" name="producto4"/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Cantidad" className="form-control form-control-sm dato_cant" name="cantidad4"/>
                                </td>
                                <td>
                                    <input type="text" placeholder="Val.Unit" className="form-control form-control-sm dato_val" name="valor4"/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Val.Total
                                </td>
                                <td>
                                    <input type="text" placeholder="Total" className="form-control form-control-sm" name="total" id="total"/>
                                </td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="input-group mb-3">
                            <button className="btn btn-success" type="submit">Registrar</button>
                        </div>

                        </form>
                        

                    </div>
                </div>
                
            </div>
        </div>
    )
}

