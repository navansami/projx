import { createContext, useReducer } from 'react'

// Components
import { apiDoLogin } from '../apis/jcLoginAPI'


export const LoginContext = createContext()

const LoginReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return { 
                ...state, 
                email: action.payload.email,
                password: action.payload.password,
                token: action.payload.data.access_token 
            }
        case "LOGIN_ERROR":
            return {
                ...state,
                errors: action.payload
            }
        case "RESET_ERRORS": 
            return {
                ...state,
                errors: action.payload
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
        password: "",
        errors: null
    })

    // set localstorage asynchronously in loginUser() 
    const setTokensToLS = (access, refresh) => {
        localStorage.setItem("token", JSON.stringify(access));
        localStorage.setItem("refreshtoken", JSON.stringify(refresh));
    }

    // Login using try/catch with axios
    const loginUser = async ( user ) => {
        try {
            const res = await apiDoLogin.post( '/api/v1/auth/login/', user );
            const data = await res;

            // structured payload
            const payload = { data: data.data, email: user.email, password: user.password }

            setTokensToLS( data.data.access_token, data.data.refresh_token )
            dispatch({ type:"LOGIN_USER", payload })

        } catch (error) {
            if(error.code === "ERR_BAD_REQUEST") {
                dispatch ({ type:"LOGIN_ERROR", payload: "Login Failed...Please check Username/Password" })
            }
        }     
    }

    // Incase of any errors dispatched to error state
    const resetLoginErrors = () => {        
        dispatch({ type: "RESET_ERRORS", payload: null })
    }


    return (
        <LoginContext.Provider value={{
            ...state, loginUser, resetLoginErrors
        }}>
            { children }
        </LoginContext.Provider>
    )

}