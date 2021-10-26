const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VentaSchame = Schema({
    idventa: Number,
    fecha: { type: Date, default: Date.now },
    producto: {
        p1: String,
        p2: String,
        p3: String,
        p4: String,
    },
    cantidad: {
        c1: Number,
        c2: Number,
        c3: Number,
        c4: Number,
    },
    valor: {
        v1: Number,
        v2: Number,
        v3: Number,
        v4: Number,
    },
    total: Number,
    estado: String
});

module.exports = mongoose.model("venta", VentaSchame);
