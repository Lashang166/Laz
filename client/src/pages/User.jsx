import React from 'react'
import Container from '@material-ui/core/Container'

import Dashboard from './Dashboard'
import Header from '../components/Headers'

const User = () => {
    return (
        <div>
            <Header/>
            <Container className="mt-3">
              <Dashboard />
            </Container>
        </div>
    )
}

export default User
