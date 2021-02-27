import { useState } from 'react'
import { Card, Typography, IconButton } from '@material-ui/core'
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { Link } from 'react-router-dom';

const CardItem = () => {
    const [image, setImage] = useState(
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
      );
    
    return (
             <Card className="flex lg:flex-col">
                <div className="lg:min-w-full h-72">
                    <Link to="/shop/product/1">
                        <img src={image} alt="5" />
                    </Link>
                </div>
                <div className="bg-white relative flex w-full h-16 py-1">
                    <Link to={`/product/${`11`}`} className="w-3/4">
                        <div className="flex flex-grow flex-col pb-2 pl-3" >
                            <Typography variant="h6">
                                Lizard 
                            </Typography> 
                            <Typography variant="subtitle1" className="mb-2">$199</Typography>
                        </div>
                    </Link>
                    <div className="h-full p-1 flex bg-red-500/ w-1/4 ">
                                
                        <IconButton className="focus:outline-none">
                            <AddShoppingCartIcon 
                                color="secondary" 
                                style={{ fontSize: 33}}
                            />
                        </IconButton>
                    </div>
                </div>

            
        </Card> 


    )
}

export default CardItem



