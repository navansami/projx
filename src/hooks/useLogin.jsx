import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export const useLogin = () => {
    const context = useContext(LoginContext);

    if(context === undefined) {
        throw new Error("useLogin() must be used inside a LoginProvider")
    }

    return context
}