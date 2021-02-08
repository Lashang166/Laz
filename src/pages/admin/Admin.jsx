
import { Container } from '@material-ui/core'
import React from 'react'
import { Route } from 'react-router-dom'
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
                </Container>
               

            </div>
        </div>
    )
}

export default Admin
