
import { Container } from '@material-ui/core'
import React from 'react'
import { Route } from 'react-router-dom'
import OrdersManager from '../OrdersManager'
import Header from './Header'
import NavSide from './NavSide'
import ProductManager from './ProductManager'

const Admin = () => {
    return (
        <div>
            <Header />
            <div className="flex">
                <NavSide />
                <Container>
                    <Route path="/admin/productmanager" component={ProductManager} /> 
                     <Route path="/admin/ordermanager" component={OrdersManager} />
                </Container>
               

            </div>
        </div>
    )
}

export default Admin
