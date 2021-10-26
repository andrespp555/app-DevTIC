const express = require("express");
const UserController = require("../controllers/user");
const ProdController = require("../controllers/producto");
const ventaController = require("../controllers/venta");

const api = express.Router();
//usuario
api.post("/sign-up", UserController.signUp);
api.get("/usuario/listar", UserController.list_usuario);
api.delete("/usuario/borrar/:id", UserController.delete_usuario);
api.put("/usuario/actualizar", UserController.update_usuario);
//productos
api.post("/producto/agregar", ProdController.add_producto);
api.get("/producto/listar", ProdController.list_producto);
api.delete("/producto/borrar/:id", ProdController.delete_producto);
api.put("/producto/actualizar", ProdController.update_producto);
//venta
api.post("/venta/agregar", ventaController.add_venta);
api.get("/venta/listar", ventaController.list_venta);
api.delete("/venta/borrar/:id", ventaController.delete_venta);
api.put("/venta/actualizar", ventaController.update_venta);

module.exports = api;