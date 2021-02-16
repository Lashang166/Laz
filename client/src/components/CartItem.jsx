import React, { useState } from 'react'

import { 
    Paper, 
    Typography, 
    CardActionArea,
    IconButton } from '@material-ui/core'
import Box from '../components/Box'
import { Link } from 'react-router-dom'

import AddBoxIcon from "@material-ui/icons/AddBox";
import  IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";;



const image =     "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80";


const CartItem = () => {
    const [qty, setQty] = useState(1);

    return (
        <div>
            <Paper className="p-3 px-5 flex flex-cold">
                <div className="mt-2 w-32 bg-red-500v">
                <CardActionArea className="focus:outline-none">
                    <Link to={`/product/${"1"}`}> 
                        <img src={image} alt="5" width="90px" height="70px" /> 
                    </Link>
                </CardActionArea>
                </div>
                <div className="flex mt-2 w-2/48 flex-wrap">
                    <div className="flex justify-between w-full">
                        <Typography  variant="body1" >ตาย่างสี่เหลี่ยมใหญ่ พร้อมหม้อชาบู เตาย่างบาบีคิว เตาย่างไฟฟ้า</Typography>
                        <Typography variant="body2" component="a"> ลบ</Typography>
                    </div>
                        <div className="w-2/4 ">
                            <div className="flex my-1 w-2/4 ">
                                <Typography variant="h6" style={{margin: "0 19px 0 0"}}>Size : </Typography>
                                <Box >S</Box>
                            </div>
                            <div className="flex my-1 w-2/4 ">
                                <Typography variant="h6" style={{margin: "0 10px 0 0"}}>Color : </Typography>
                                <Box color="#f6685e" />
                            </div>
                        </div>

                        <div className="flex items-center  w-2/4 ">
                            <Typography variant="body1">จำนวน :</Typography>
                            <div className="flex">
                            <IconButton
                                className="focus:outline-none text-xl"
                                onClick={() => (qty == 1 ? "" : setQty(qty - 1))}
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
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                            />
                            <IconButton
                                className="focus:outline-none"
                                onClick={() => setQty(qty + 1)}
                            >
                                <AddBoxIcon
                                color="primary"
                                fontSize="large"
                                className="focus:outline-none text-xl"
                                />
                            </IconButton>
                            </div>
                        </div>
                   
                </div>
            </Paper>
        </div>
    )
}

export default CartItem
