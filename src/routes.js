import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import Shop from './pages/Shop';



const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/shop" component={Shop} />
        </Switch>
    )
}


export default Routes