import axios from 'axios'


export default {
    register: (username, email, password) => async (dispatch) => {
        dispatch({ type: "USER_REGISTER_REQUEST" })
        console.log(username, email, password)
        try {
            const { data } = await axios.post("http://localhost:4000/api/user/register", {username, email, password})
            console.log(data);
            dispatch({ type: "USER_REGISTER_SUCCESS", payload: data })
         
        } catch (error) {
            dispatch({ type: "USER_REGISTER_FAIL", payload: error.response })
        }
    },
    login: (username, password) => async (dispatch) => {
        dispatch({ type: "USER_LOGIN_REQUEST" })
        try {
            const { data } = await axios.post("http://localhost:4000/api/user/login", {username,password})
            console.log(data);
            dispatch({ type: "USER_LOGIN_SUCCESS", payload: data })
         
        } catch (error) {
            dispatch({ type: "USER_LOGIN_FAIL", payload: error.response })
        }    
    },
    authenticated: () => async (dispatch) => {
        dispatch({ type: "USER_AUTH_REQUEST" })
        try {
            const { data } = await axios.get("http://localhost:4000/api/user/authenticated")
            console.log(data)
            dispatch({ type: "USER_AUTH_SUCCESS", payload: data })
    
        } catch (error) {
            dispatch({ type: "USER_AUTH_FAIL", payload: error.response })
        }
    }
    
    
}






