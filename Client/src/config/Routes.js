import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../pages/Login/Login';
//import homeA from '../pages/homeA/homeA';

export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>         
        </Router>
    );
}
