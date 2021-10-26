const mongoose = require ("mongoose"); //Base de datos
//import app
const app = require ("./App");
//import puerto
const port = process.env.PORT || 3977;
//venrsion de API
const { API_VERSION, IP_SERVER, PORT_DB } = require ("./config");

//llamar la conexion
mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/app-devtic`,

//Validación de credenciales de conexión
{ useNewUrlParser: true, useUnifiedTopology: true }, (err, res) =>{
    if(err){
        throw err;
    }else{
        console.log("La conexión a la base de datos es correcta");

        app.listen(port, () =>{
            console.log("######################");
            console.log("###### API REST ######");
            console.log("######################");
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
        })
    }
});