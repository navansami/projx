
// Components
import LoginForm from "../components/Login/LoginForm";
import LoginSplit from "../components/Login/LoginSplit";

const Login = () => {

    return(
        <div className="login">
            <LoginForm />
            <LoginSplit />  {/* Presentational Component Only */}
        </div>
    )
}

export default Login;