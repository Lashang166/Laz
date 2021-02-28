import { combineReducers } from 'redux';

import { userReducer } from './userReducers'
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducers'

const rootReducer = combineReducers({
    userState: userReducer,
    productsState: productReducer,
    cartState: cartReducer
})


export default rootReducer