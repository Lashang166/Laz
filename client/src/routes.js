import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Admin from './pages/Admin/Admin'
import Buyer from './pages/Buyer'
import Checkout from './pages/Checkout'
import User from './pages/User'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Shop}/>
            <Route path="/shop/product/:id" component={Product} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/cart/checkout" component={Checkout} />
            <Route path="/admin/:id" exact component={Admin} />
            <Route path="/user/:id" exact  component={User} />
            <UnPrivateRoute path="/buyer/:id" component={Buyer} />
        </Switch>
    )
}


export const PrivateRoute = ({component : Component, roles, ...rest})=>{
    const { user } = useSelector(state => state.userLogin)
    
    return(
        <Route {...rest} render={props =>{
            if(!user.isAuthenticated)
                
                return <Redirect to={{ pathname: '/', 
                                       state : {from : props.location}}}/>
            if(!roles.includes(user.userInfo.role))
                return <Redirect to={{ pathname: '/', 
                                 state : {from : props.location}}}/>
            return <Component {...props}/>
        }}/>
    )
}

export const UnPrivateRoute = ({component : Component,...rest})=>{
    const { isAuthenticated } = useSelector(state => state.userState)
    return(
        <Route {...rest} render={props =>{
            if(isAuthenticated)
                return <Redirect to={{ pathname: '/', 
                                       state : {from : props.location}}}/>
                                       
            return <Component {...props}/>
        }}/>
    )
}


export default Routes