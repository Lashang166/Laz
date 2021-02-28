import React from 'react'
import { Container } from '@material-ui/core'

import { Route } from 'react-router-dom'

import Header from './Header'
import NavSide from './NavSide'
import ProductManager from './ProductManager'
import AddProduct from './AddProduct'
import OrdersManager from './OrderManager'

const Admin = () => {
    return (
        <div>
            <Header />
            <div className="flex">
                <NavSide />
                <Container>
                    <Route  roles={["admin"]}  path="/admin/productmanager" exact component={ProductManager} /> 
                    <Route  roles={["admin"]}  path="/admin/productmanager/add" component={AddProduct} /> 
                    <Route  roles={["admin"]}  path="/admin/ordermanager" component={OrdersManager} />
                </Container>
               

            </div>
        </div>
    )
}

export default Admin
