import React from 'react'
import Header from '../components/Headers'
import Container from '@material-ui/core/Container'
import { Typography, Paper } from '@material-ui/core'
import CartItem from '../components/CartItem'

const Cart = () => {
    return (
        <div style={{ background: "#f5f5f5"}}>
            <Header />
            <Container className="relative min-h-screen" maxWidth="lg">
                <div className="bg-white mt-5 h-13 flex justify-items-center ">
                    <div className=" flex px-5 py-2 w-full ">
                        <div className="w-1/12">
                            <input type="checkbox" className="mt-1 w-4 h-4" />
                        </div>
                        <Typography variant="body1" className=" w-5/12">สินค้า</Typography>
                        <Typography variant="body1" className="w-2/12 text-gray-500">ราคาต่อชื้น</Typography>
                        <Typography variant="body1" className="w-2/12 text-gray-500">จำนวน</Typography>
                        <Typography variant="body1" className="w-2/12 text-gray-500">ราคารวม</Typography>
                        <Typography variant="body1" className="w-1/12 text-gray-500">แอ็คชั่น</Typography>
                    </div>
                    
                </div>

                <div className="">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <div className="h-32 mt-2 p-2"></div>
                </div>

                <div >
                    <Paper className="fixed px-10 py-4 flex  bg-white h-32 bottom-0 w-full">
                        <div className="w-2/4">
                            <Typography variant="h5">ทั้งหมด 10 ชิ้น</Typography>
                            <Typography variant="h5">รวม <span className="text-primary-200">1110</span> บาท</Typography>
                        </div>
                        <div className="w-2/4 h-full ">
                          <button style={{background: "#ee4d2d"}} class=" w-2/4 h-12 flex items-center justify-center rounded-md  text-white text-xl" type="submit">สั่งซื่อ</button>

                        </div>
                    </Paper>
                </div>
              
            </Container>
        </div>
    )
}

export default Cart
