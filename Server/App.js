const express = require ("express"); //Servidor
const bodyParser = require ("body-parser"); //parser JSON

const app = express();
const { API_VERSION } = require ('./config');
const userRoutes = require('./routers/user');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const cors=require("cors");
app.use(cors({ origin: true, credentials: true }));

app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;