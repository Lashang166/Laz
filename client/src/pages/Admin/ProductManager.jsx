import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import TableEnhance from './TableStyle'
import { 
    Button, 
   } from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from 'react-redux'
import ProductActions from '../../actions/productActions'


const ProductManager = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.productsState)
    useEffect(() => {
        dispatch(ProductActions.fetch())

    return () => {
        
    }

    

    }, [])
    


    return (
        <div className="flex flex-col">
            <div className="flex justify-end pt-4">
                <Button
                variant="contained"
                color="secondary"
                startIcon={<AddIcon />}
                >
                <Link to="/admin/addproduct">เพิ่มสินค้า</Link> 
                </Button>
            </div>
            
            <div className="mt-5">
                <TableEnhance topic="รายการสินค้า"  products={products} order={false} />
            </div>
        </div>
    )
}

export default ProductManager
