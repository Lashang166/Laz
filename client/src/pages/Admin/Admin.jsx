import React from 'react'
import { Container } from '@material-ui/core'

import { Route } from 'react-router-dom'

import Header from './Header'
import NavSide from './NavSide'
import ProductManager from './ProductManager' 
import AddProduct from './AddProduct'
import OrdersManager from './OrderManager'
import BrandManager from './BrandManager'
import ShippingMaager from './ShippingManager'
import CategoryManager from './CategoryManager'

const Admin = () => {
    return (
        <div>
            <Header />
            <div className="flex">
                <NavSide />
                <Container>
                    <Route  roles={["admin"]}  path="/admin/productmanager/" exact component={ProductManager} /> 
                    <Route  roles={["admin"]}  path="/admin/addproduct" component={AddProduct} /> 
                    <Route  roles={["admin"]}  path="/admin/ordermanager/" component={OrdersManager} />
                    <Route  roles={["admin"]}  path="/admin/brandmanager/" component={BrandManager} />
                    <Route  roles={["admin"]}  path="/admin/shippingmanager/" component={ShippingMaager} />
                    <Route  roles={["admin"]}  path="/admin/categorymanager/" component={CategoryManager} />
                </Container>
               

            </div>
        </div>
    )
}

export default Admin
