 

export const userRegisterReducer = (state = {loading: false, userInfo: null, message: ""}, action) => {
    switch(action.type) {
        case "USER_REGISTER_REQUEST":
            return { loading: true };
        case "USER_REGISTER_SUCCESS":
            return { loading: false, message: action.payload.message, userInfo: action.payload.newUser };
        case "USER_REGISTER_FAIL": 
            return { loading: false, message: action.payload.message };
        default: 
            return state
    }
}


export const userLoginReducer = (state = {loading: false, user: null, isAuthenticated: false}, action) => {
    switch(action.type) {
        case "USER_LOGIN_REQUEST":
            return {...state,  loading: true };
        case "USER_LOGIN_SUCCESS":
            return {...state,
                        loading: false, 
                        message: action.payload.message, 
                        user: action.payload.user,
                        isAuthenticated: action.payload.isAuthenticated };
        case "USER_LOGIN_FAIL": 
            return {...state,  loading: false, message: action.payload.message };
        default:
            return state
    }
}


export const userAuthReducer = (state = {loading: false, user: null, isAuthenticated: false}, action) => {
    switch(action.type) {
        case "USER_AUTH_REQUEST":
            return {...state,  loading: true };
        case "USER_AUTH_SUCCESS":
            return {...state,
                        loading: false, 
                        user: action.payload.user,
                        isAuthenticated: action.payload.isAuthenticated };
        case "USER_AUTH_FAIL": 
            return {...state,  loading: false,  };
        default:
            return state
    }}

