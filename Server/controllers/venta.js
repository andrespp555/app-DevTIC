const express = require ("express");

const Venta = require("../models/venta");

const app = express();

app.use( express.urlencoded({extended: false}));
app.use( express.json());

add_venta = (req, res) =>{
    const venta = new Venta();
    
    const { idventa, fecha, producto, cantidad, valor, total, estado} = req.body;

    venta.idventa = idventa;
    venta.fecha = fecha;
    venta.producto = producto;
    venta.cantidad = cantidad;
    venta.valor = valor;
    venta.total = total;
    venta.estado = estado;

    if(!idventa || !fecha || !total){
        res.status(500).send({ message: "Los datos son obligatorios."});
    }else{
        venta.save((err, venta_guardada) => {
            if(err){
                res.status(404).send({ message: `Not found ${err}`});
            }else{
                res.status(200).send({venta:venta_guardada});
            }
        });
    }

};

list_venta = (req, res) => {
    Venta.find({}, (err, venta) => {
        if(err) return res.status(500).send({message: 'Error Interno'});

        if(!venta) return res.status(404).send({message: `Not found ${err}`});

        res.status(200).send({venta});
    });
};

delete_venta = async (req, res) => {
    const delete_v = await Venta.findByIdAndDelete({_id: req.params.id})
    try{
        if(delete_v) return res.json({mensaje: delete_v.description + " eliminado correctamente"});
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    }catch(error){
        return res.staus(500).json({error:true, mensaje: error})
    }
};

update_venta = async (req, res) => {
    try{
        const venta_update = await Venta.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false});
        if(venta_update) return res.json({mensaje: "Venta actualizada correctamente"});
        else return res.status(400).json({error: true, mensaje: "Falla al actualizar"})
    }catch(error){
        if(error) return res.status(500).json({error: true, mensaje: error});
    }
};

module.exports = {add_venta, list_venta, delete_venta, update_venta};
