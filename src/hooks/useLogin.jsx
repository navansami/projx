import { useContext } from "react"

// Components
import { LoginContext } from "../context/LoginContext"


export const useLogin = () => {
    const context = useContext(LoginContext);

    if(context === undefined) {
        throw new Error("useLogin() must be used inside a LoginProvider")
    }

    return context
}