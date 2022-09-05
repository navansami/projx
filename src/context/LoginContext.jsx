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
    const [state, dispatch] = useReducer(LoginReducer, {
        token: 0,
        email: "",
        password: ""
    })

    const loginUser = async (user, endpoint) => {
        console.log(user, endpoint);
        const res = await axios.post(endpoint, user);
        const data = await res;

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