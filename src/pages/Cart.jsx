import React from 'react'

import { Header } from '../components/Header'
import CartItem from '../components/CartItem'
import { Container, Grid, Paper } from '@material-ui/core'
import Path from '../components/Path'


const Cart = () => {
    return (
        <div>
            <Header />
            <Path />
            <Container className="mt-5">
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <CartItem />
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className="p-5">
                            asdf
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Cart
