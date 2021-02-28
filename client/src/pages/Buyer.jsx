import React from 'react'
import { Route } from 'react-router-dom'
import Login, { Register } from '../components/Login'
import Header from '../components/Headers'

const Buyer = () => {
    return (
        <div>
            <Header />
            <Route path = "/buyer/login" component={Login} />
            <Route path = "/buyer/register" component={Register} />
            
        </div>
    )
}

export default Buyer

