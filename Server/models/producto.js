const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductoSchame = Schema({
    idProducto: Number,
    descripcion: String,
    valor: Number,
    estado: String
});

module.exports = mongoose.model("producto", ProductoSchame);
