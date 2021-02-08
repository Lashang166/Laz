import React from 'react'
import { Container } from '@material-ui/core'
import { Route } from 'react-router-dom'
import { Header } from '../components/Header'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from './Dashboard'



const User = () => {
    return (
        <div>
           <Header />
           <Container className="mt-16 flex">
            <Route path="/user/login" component={Login}/>
            <Route path="/user/register" component={Register} />
            <Route path="/user/dashboard" component={Dashboard} />

           </Container>
        </div> 
    )
}

export default User
