import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Menu SideBar
import NavBar from '../components/NavBar/NavBar';
import Products from '../pages/Products/Products';
import Ventas from '../pages/Ventas/Ventas';
import Admin from '../pages/Admin/Admin';
import Inicio from '../pages/Inicio/Inicio';
//import Login from '../pages/Login/Login';
//Opciones botones de navegació
import RegistrarProducto from '../pages/RegistrarProducto/RegistrarProducto';
import BuscarVenta from '../pages/BuscarVenta/BuscarVenta';
import BuscarUsu from '../pages/BuscarUsu/BuscarUsu';
import ModiUsuario from '../pages/ModiUsuario/ModiUsuario';

export default function AppRouter() {
    return(
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Inicio} />
            </Switch>
            <Switch>
                <Route exact path="/Inicio" component={Inicio} />
                <Route exact path="/Products" component={Products} />
                <Route exact path="/Ventas" component={Ventas} />
                <Route exact path="/Admin" component={Admin} />
            </Switch>
            <Switch>
                <Route exact path="/RegistrarProducto" component={RegistrarProducto} />
                <Route exact path="/ModiUsuario" component={ModiUsuario} />
                <Route exact path="/BuscarVenta" component={BuscarVenta} />
                <Route exact path="/BuscarUsu" component={BuscarUsu} />
            </Switch>
        </Router>

    );
}

