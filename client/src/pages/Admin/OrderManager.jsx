import { useEffect, useState } from 'react'
import Table from './OrderTable'
import axios from 'axios'

const OrderManager = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();

        axios.get('/api/order/fetch', { cancelToken: source.token })
            .then(res => {
                setOrders(res.data.orders)
                console.log(res.data.orders);
            }).catch((err) => {
                if (axios.isCancel(err)) {
                    return "axios request cancelled"
                  }
                  return err 
            })

        return () => {
            source.cancel();
        } 
    },[])


    return (
        <div className="">
            <div className="mt-10">
            <Table orders={orders} />

            </div>
        </div>
    )
}

export default OrderManager
