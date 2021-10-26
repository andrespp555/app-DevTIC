import React, { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';

export default function ModiUsuario(){




    return(
      <div>
        <table>
              <tr>
                  <td>
                      <input type="text" placeholder="ID"  className="form-control form-control-sm"/>
                  </td>
                  <td>
                      <input type="text" placeholder="Nombre" className="form-control form-control-sm"/>
                  </td>
                  <td>
                      <input type="text" placeholder="Apellido" className="form-control form-control-sm"/>
                  </td>
                  <td>
                      <input type="text" placeholder="E-mail" className="form-control form-control-sm"/>
                  </td>
              </tr>
              <tr>
                  <td>
                      <input type="text" placeholder="Nueva Clave" className="form-control form-control-sm"/>
                  </td>
                  <td>
                      <select className="form-control form-control-sm">
                          <option value="vendedor">Vendedor</option>
                          <option value="administrador">Administrador</option>
                      </select>
                  </td>
                  <td>
                      <select className="form-control form-control-sm">
                          <option value="activo">Activo</option>
                          <option value="inactivo">Inactivo</option>
                      </select>
                  </td>
                  <td>
                      <button className="btn btn-success m-1" type="submit">A</button> 
                      <button className="btn btn-danger m-1" type="submit">B</button>
                  </td>
              </tr>
        </table>
      </div>
    )
}