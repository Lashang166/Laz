import React, { useState } from 'react'

import { 
    Paper, 
    Typography, 
    CardActionArea,
    IconButton } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Box from '../components/Box'
import { Link } from 'react-router-dom'
import AddBoxIcon from "@material-ui/icons/AddBox";
import  IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";;


const image =     "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80";


const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const [qty, setQty] = useState(item.qty);



    return (
        <div>
            <Paper className="p-3 mt-3 px-5 flex flex-cold">
                <div className="w-5/12 flex justify-between">
                    <div className="mt-2 w-32 bg-red-500v">
                    <CardActionArea className="focus:outline-none">
                        <Link to={`/shop/product/${item.product_Id}`}> 
                            <img src={image} alt="5" width="90px" height="70px" /> 
                        </Link>
                    </CardActionArea>
                    </div>
                    <div className="flex flex-col pt-2">
                        <Typography  variant="body1" >{item.title}</Typography>
                        <div className="flex pt-3">
                            <div className="flex my-1 w-2/4 ">
                                <Typography variant="h6" style={{margin: "0 19px 0 0"}}>Size : </Typography>
                                <Box >{item.size}</Box>
                            </div>
                            <div className="flex my-1 w-2/4 ">
                                <Typography variant="h6" style={{margin: "0 19px 0 0"}}>Color : </Typography>
                                <Box >{item.color}</Box>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/12  flex justify-center items-center">
                    <Typography variant="h5">{item.price}</Typography>
                </div>
                <div className="flex w-2/12">
                    <div className="flex items-center ">     
                            <div className="flex">
                                <IconButton
                                    className="focus:outline-none text-xl"
                                    onClick={() => {
                                        dispatch({ type:  "CART_ITEM_DECREASE", cartId: item.cartId })
                                    }}
                                >
                                    <IndeterminateCheckBoxIcon
                                    color="primary"
                                    fontSize="large"
                                    />
                                </IconButton>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="w-10 h-10 focus:outline-none text-xl mt-2 bg-blue-50 text-center"
                                    value={item.qty}
                                    onChange={(e) => setQty(e.target.value)}
                                />
                                <IconButton
                                    className="focus:outline-none"
                                    onClick={() => {
                                        dispatch({ type:  "CART_ITEM_INCREASE", cartId: item.cartId })
                                    }}
                                >
                                    <AddBoxIcon
                                    color="primary"
                                    fontSize="large"
                                    className="focus:outline-none"
                                    />
                                </IconButton>
                            </div>
                        </div>
                </div>
                <div className="w-1/12   flex justify-center items-center">
                    <Typography variant="h5">{item.qty * item.price}</Typography>
                </div>
                <div className="w-2/12  bg-yellow-6009  flex justify-end items-center">
                    <Typography variant="h6" className="mr-12">ลบ</Typography>
                </div>
                    
 

                    
                   
            </Paper>
        </div>
    )
}

export default CartItem
