const express = require ("express");

const Producto = require("../models/producto");

const app = express();

app.use( express.urlencoded({extended: false}));
app.use( express.json());

add_producto = (req, res) =>{
    const producto = new Producto();
    
    const { idProducto, descripcion, valor, estado} = req.body;

    producto.idProducto = idProducto;
    producto.descripcion = descripcion;
    producto.valor = valor;
    producto.estado = estado;

    if(!idProducto || !descripcion || !valor || !estado){
        res.status(500).send({ message: "Los datos son obligatorios."});
    }else{
        producto.save((err, producto_guardado) => {
            if(err){
                res.status(404).send({ message: `Not found ${err}`});
            }else{
                res.status(200).send({producto:producto_guardado});
            }
        });
    }

};

list_producto = (req, res) => {

    Producto.find({}, (err, producto) => {
        if(err) return res.status(500).send({message: 'Error Interno'});

        if(!producto) return res.status(404).send({message: `Not found ${err}`});

        res.status(200).send({producto});
    });
};

list_producto_x = (req, res) => {
    const { descripcion } = req.body.id;

    Producto.find(descripcion, (err, producto) => {
        if(err) return res.status(500).send({message: 'Error Interno'});

        if(!producto) return res.status(404).send({message: `Not found ${err}`});

        res.status(200).send({producto});
    });
};

delete_producto = async (req, res) => {
    const delete_p = await Producto.findByIdAndDelete({_id: req.params.id})
    try{
        if(delete_p) return res.json({mensaje: delete_p.description + " eliminado correctamente"});
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    }catch(error){
        return res.staus(500).json({error:true, mensaje: error})
    }
};

update_producto = async (req, res) => {
    try{
        const product_update = await Producto.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false});
        if(product_update) return res.json({mensaje: "Producto actualizado correctamente"});
        else return res.status(400).json({error: true, mensaje: "Falla al actualizar"})
    }catch(error){
        if(error) return res.status(500).json({error: true, mensaje: error});
    }
};


module.exports = {add_producto, list_producto, list_producto_x, delete_producto, update_producto};
