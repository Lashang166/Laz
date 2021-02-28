import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import TableEnhance from './TableStyle'
import { 
    Button, 
   } from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from 'react-redux'
import ProductActions from '../../actions/productActions'





// function createData(name, price, countInStock, soldCount, brand, category, colors, size) {
// return {name, price, countInStock, soldCount, brand, category, colors, size};
// }

// const rows = [
// createData('Cupcake', "adidas", 10, 3.5, 0, 200, 0, 0),
// createData('Donut', "452", 25, 3.5, 0, 200, 0, 0),
// createData('Eclair', "Nike", 16, 3.5, 0, 200, 0, 0),
// createData('Frozen yoghurt', "Hoya", 3.5, 24, 0, 200, 0, 0),
// createData('Gingerbread', "univers", 3.5, 49, 0, 200, 0, 0),
// createData('Honeycomb', "adidas", 3, 3.5, 6.5, 200, 0, 0),
// createData('Ice cream sandwich', "uniqo", 9.0, 3.5, 0, 200, 0, 0),
// createData('Jelly Bean', "uniqo", 10, 3.5, 0, 200, 0, 0),
// createData('KitKat', "Nike", 26, 3.5, 0, 200, 0, 0),
// createData('Lollipop', "Hoya", 2, 3.5, 0, 200, 0, 0),
// createData('Marshmallow', "Nike", 0, 81, 0, 200, 0, 0),
// createData('Nougat', "adidas", 19, 3.5, 30, 200, 0, 0),
// createData('Oreo', "adidas", 18, 3.5, 0, 200, 0, 0),
// ]



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
                <Link to="/admin/productmanager/add">เพิ่มสินค้า</Link> 
                </Button>
            </div>
            
            <div className="mt-5">
                <TableEnhance topic="รายการสินค้า"  products={products} order={false} />

            </div>
        </div>
    )
}

export default ProductManager
