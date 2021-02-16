import { combineReducers } from 'redux';

import { userRegisterReducer, userLoginReducer } from './userReducers'

const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer
})


export default rootReducer