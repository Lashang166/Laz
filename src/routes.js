import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import Shop from './pages/Shop';
import User from './pages/User'
import Product from './pages/Product';
import Admin from './pages/admin/Admin';


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/shop" component={Shop} />
            <Route path="/product/:id" component={Product} />
            <Route path="/user" component={User} />
            <Route path="/admin" component={Admin} />
        </Switch>
    )
}


export default Routes