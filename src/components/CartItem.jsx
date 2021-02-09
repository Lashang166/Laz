import React from 'react'

import { Paper, Typography, CardActionArea } from '@material-ui/core'
import Box from '../components/Box'
import { Link } from 'react-router-dom'

const image =     "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80";


const CartItem = () => {
    return (
        <div>
            {/* <Paper className="p-1 px-4 bg-white  border border-b-1 border-gray-300">
                <Typography variant="h6">Item 1</Typography>
            </Paper> */}
            <Paper className="p-3 px-5 flex flex-cold">
                <div className="mt-2 w-32 bg-red-500v">
                <CardActionArea className="focus:outline-none">
                    <Link to={`/product/${"1"}`}> 
                        <img src={image} alt="5" width="90px" height="70px" /> 
                    </Link>
                </CardActionArea>
                </div>
                <div className="flex mt-2 w-3/4 flex-col">
                    <Typography variant="h6">ตาย่างสี่เหลี่ยมใหญ่ พร้อมหม้อชาบู เตาย่างบาบีคิว เตาย่างไฟฟ้า</Typography>
                    <div className="flex my-1 w-2/4">
                        <Typography variant="h6" style={{margin: "0 19px 0 0"}}>Size : </Typography>
                        <Box >S</Box>
                    </div>
                    <div className="flex my-1 w-2/4">
                        <Typography variant="h6" style={{margin: "0 10px 0 0"}}>Color : </Typography>
                        <Box color="#f6685e" />
                    </div>
                    <div className="flex my-1 w-2/4">
                        <Typography variant="h6" style={{margin: "0 10px 0 0"}}>Color : </Typography>
                        <Box color="#f6685e" />
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default CartItem
