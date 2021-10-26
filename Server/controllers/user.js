const express = require ("express");
const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

const app = express();

app.use( express.urlencoded({extended: false}));
app.use( express.json());

signUp = (req, res) =>{
    const user = new User();

    const { name, lastname, email, password, repeatPassword, role, active} = req.body;
    user.name = name;
    user.lastname = lastname;
    user.email = email;
    user.password = password;
    user.repeatPassword = repeatPassword;
    user.role = role;
    user.active = active;

    if(!password || !repeatPassword){
        res.status(404).send({ message: "Las contraseñas son obligatorias."});
    }else{
        if(password !== repeatPassword){
            res.status(404).send({ message: "Las contraseñas no son iguales."});
        }else{
            bcrypt.hash(password, null, null, function(err, hash){
                if(err){
                    res.status(500).send({ message: "Error al encriptar la contraseña"});
                }else{
                    user.password = hash;

                    user.save((err, userStored) =>{
                        if(err){
                            res.status(500).send({message: "El usuario ya existe."});
                        }else{
                            if(!userStored){
                                res.status(404).send({message: "Error al crear usuario"});
                            }else{
                                res.status(200).send({user:userStored});
                            }
                        }
                    });
                }
            });
        }
    }
    
}


list_usuario = (req, res) => {

    User.find({}, (err, usuario) => {
        if(err) return res.status(500).send({message: 'Error Interno'});

        if(!usuario) return res.status(404).send({message: `Not found ${err}`});

        res.status(200).send({usuario});
    });
};


delete_usuario = async (req, res) => {
    const delete_u = await User.findByIdAndDelete({_id: req.params.id})
    try{
        if(delete_u) return res.json({mensaje: delete_u.description + " eliminado correctamente"});
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    }catch(error){
        return res.staus(500).json({error:true, mensaje: error})
    }
};

update_usuario = async (req, res) => {
    try{
        const usuario_update = await User.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false});
        if(usuario_update) return res.json({mensaje: "Producto actualizado correctamente"});
        else return res.status(400).json({error: true, mensaje: "Falla al actualizar"})
    }catch(error){
        if(error) return res.status(500).json({error: true, mensaje: error});
    }
};

module.exports = {signUp, list_usuario, delete_usuario, update_usuario};