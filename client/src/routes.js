import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Shop}/>
            <Route path="/shop/product/:id" component={Product} />
            <Route path="/cart" component={Cart} />
        </Switch>
    )
}


export default Routes