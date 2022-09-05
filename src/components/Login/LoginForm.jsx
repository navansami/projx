import { useState } from 'react';

// Components
import { useLogin } from '../../hooks/useLogin';

const LoginForm = () => {
    const 
        [ email, setEmail ] = useState(""),
        [ password, setPassword ] = useState(""),
        { loginUser } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser( {email, password}, 
            "https://challenge.testing-room.com/api/v1/auth/login/" );
        setEmail(""); setPassword("");
    }

    return (
        <div className="login-form">
            
            <div className="login-header">
                <img src={'images/logo/logo-main.png'} alt="project logo" />
            </div>

            <div className="login-header-text">
                <p>
                   <span className="text-slogan text-accent">Log in</span> now and start customizing your activities on our platform
                </p>
            </div>

            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="userEmail">Email Address</label>
                    <input 
                        type="text" 
                        name="userEmail" 
                        id="userEmail" 
                        placeholder="Email Address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                
                <div className="field"> 
                    <label htmlFor="userEmail">Password</label>
                    <input 
                        type="password" 
                        name="userPassword" 
                        id="userPassword" 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <p className="text-forgot">
                        <a href="/login" className="text-accent">Forgot Password?</a>
                    </p>
                </div>
                
                <div className="field">
                    <button className="btn btn-block">
                        Login
                    </button>
                    <p className='text-noaccount'>Don't have an account? <span className="text-signup text-accent">Sign up</span></p>
                </div>
            </form>

            <div className="login-footer">
                <a href='/login'>Terms &amp; Conditions</a>
                <a href='/login'>Privacy Policy</a>
            </div>
        
        </div>
    )
}

export default LoginForm