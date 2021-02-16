import React from 'react'
import TableStyle from './admin/Table'



function createData(name, Brand, Stock, Rating, Sales, Price) {
    return { name, Brand, Stock, Rating, Sales, Price };
  }

const rows = [
    createData('Cupcake', "adidas", 10, 3.5, 0, 200),
    createData('Donut', "452", 25, 3.5, 0, 200),
    createData('Eclair', "Nike", 16, 3.5, 0, 200),
    createData('Frozen yoghurt', "Hoya", 3.5, 24, 0, 200),
    createData('Gingerbread', "univers", 3.5, 49, 0, 200),
    createData('Honeycomb', "adidas", 3, 3.5, 6.5, 200),
    createData('Ice cream sandwich', "uniqo", 9.0, 3.5, 0, 200),
    createData('Jelly Bean', "uniqo", 10, 3.5, 0, 200),
    createData('KitKat', "Nike", 26, 3.5, 0, 200),
    createData('Lollipop', "Hoya", 2, 3.5, 0, 200),
    createData('Marshmallow', "Nike", 0, 81, 0, 200),
    createData('Nougat', "adidas", 19, 3.5, 30, 200),
    createData('Oreo', "adidas", 18, 3.5, 0, 200),
]

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Orders' },
    { id: 'Brand', numeric: false, disablePadding: true, label: 'Brand' },
    { id: 'Stock', numeric: false, disablePadding: true, label: 'in Stock' },
    { id: 'Rating', numeric: false, disablePadding: true, label: 'Rating' },
    { id: 'Sales', numeric: false, disablePadding: true, label: 'Sales' },
    { id: 'Price', numeric: false, disablePadding: true, label: 'Price' },

]


const OrdersManager = () => {
    return (
        <div className="mt-5 p-5">
            <div className="flex">
                <TableStyle topic="รายการสั่งสินค้า" headCells={headCells} rows={rows} order={true} />
            </div>
        </div>
    )
}

export default OrdersManager
