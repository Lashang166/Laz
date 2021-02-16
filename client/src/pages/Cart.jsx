import React from 'react'

import { Header } from '../components/Header'
import { Link } from 'react-router-dom'
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
                            <div className="flex flex-col bg-white sticky top-16 w-full mt-4 ">
                                <div className="bg-white shadow-sm px-5 pt-2">
                                    <h3 className="text-xl font-bold uppercase">cart total</h3>
                                </div>
                                <div className="flex p-2 w-full justify-between px-5">
                                    <h1 className="text-gray-600 text-xl font-semibold">Subtotal :</h1>
                                    <h1 className="text-black text-xl font-semibold">$ 300</h1>
                                </div>
                                <div className="flex p-2 w-full justify-between px-5">
                                    <h1 className="text-gray-600 text-xl font-semibold">Delivery :</h1>
                                    <h1 className="text-black text-xl font-semibold">$30.00</h1>
                                </div>
                                <div className="flex p-2 w-full border-b-2 pb-2 border-gray-200 px-5">
                                    <input type="text" name="a" id="a" className="w-2/3 h-10 border p-2 focus:outline-none"  placeholder="Coupon"/>
                                    <button className="hover:text-white transition-opacity hover:bg-black px-2 uppercase font-semibold text-center border-2">Confirm</button>
                                </div>
                                <div className="flex p-2 w-full justify-between px-5 py-5">
                                    <h1 className="text-gray-600 text-xl font-semibold">TOTAL :</h1>
                                    <h1 className="text-black text-xl font-semibold">$ 300</h1>
                                </div>
                                <div className="flex p-2 w-full justify-between px-5 py-5">
                                    <Link to="/checkout" className="w-full h-full p-3 hover:text-white transition-opacity hover:bg-black px-2 uppercase font-semibold text-center border-2">process to checkout</Link>
                                </div>
                            </div>
                   
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Cart
