import { createContext, useReducer } from 'react';
import axios from 'axios';

export const LoginContext = createContext();


const LoginReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return { 
                ...state, 
                email: action.payload.email,
                password: action.payload.password,
                token: action.payload.data.access_token 
            }
        default:
            return state
    }
}


export function LoginProvider({ children }) {

    // get token if exists and pass into inital state
    const token = JSON.parse(localStorage.getItem("token")) || null 

    // Initial State
    const [state, dispatch] = useReducer(LoginReducer, {
        token: token,
        email: "",
        password: ""
    })

    // set localstorage asynchronously in loginUser() 
    const setItemToLS = (access, refresh) => {
        localStorage.setItem("token", JSON.stringify(access));
        localStorage.setItem("refreshtoken", JSON.stringify(refresh));
    }


    const loginUser = async (user, endpoint) => {

        const res = await axios.post(endpoint, user);
        const data = await res;

        if(data) setItemToLS( data.data.access_token, data.data.refresh_token )

        const payload = { data: data.data, email: user.email, password: user.password }
        
        dispatch({ type:"LOGIN_USER", payload })
    }


    return (
        <LoginContext.Provider value={{
            ...state, loginUser
        }}>
            { children }
        </LoginContext.Provider>
    )

}