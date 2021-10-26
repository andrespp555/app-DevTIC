import React from "react";
import axios from "axios";

export default function RegistrarProducto(){

    function handleOnsubmit(e){
        e.preventDefault();

        const productoSchema = {
            idProducto: e.target.id_prod.value,
            descripcion: e.target.descripcion.value,
            valor:  e.target.valor.value,
            estado:  e.target.estado.value
        };

        axios.post(`http://localhost:3977/api/V1/producto/agregar`, productoSchema).then(res => {alert( 'Datos agregados' + e.target.id_prod.value + '\n' + e.target.descripcion.value + '\n' + e.target.valor.value + '\n' + e.target.estado.value);})

        
    }

    return(
        <div className="container">
            <div className="row">
            
                <div className="col-md-10 mx-auto">         
                    <div className="pt-3">
                        <h3>Módulo Productos</h3>
                        <h6>Registrar Producto</h6>
                        <hr/>
                        <form onSubmit = {handleOnsubmit}>
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
                                        <input type="text" placeholder="ID" className="form-control form-control-sm" name="id_prod" id="id_prod" />
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Descripción" className="form-control form-control-sm" name="descripcion" id="descripcion"/>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Valor" className="form-control form-control-sm" name="valor" id="valor"/>
                                    </td>
                                    <td>
                                    <select className="form-control form-control-sm" name="estado" id="estado">
                                            <option value="disponible">Disponible</option>
                                            <option value="agotado">Agotado</option>
                                        </select>
                                    </td>
                                </tr>

                                </tbody>
                            </table>

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <button className="btn btn-success" type="submit">Registrar</button>
                                </div>
                            </div>
                        </form> 

                    </div>
                </div>
                
            </div>
        </div>
    )
}