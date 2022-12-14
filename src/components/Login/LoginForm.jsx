import { useEffect, useState } from 'react'

// Components
import { useLogin } from '../../hooks/useLogin'
import Button from '../General/Button'

// Styles
import '../../css/login.css'


const LoginForm = () => {
    const 
        [ email, setEmail ] = useState(""),
        [ password, setPassword ] = useState(""),
        { loginUser, errors, resetLoginErrors } = useLogin()


    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser( {email, password} )
        setEmail(""); setPassword("");
    }

    // reset errors to null after 3 seconds
    useEffect(() => {
        if(errors) setTimeout(() => resetLoginErrors(), 3000)
        // eslint-disable-next-line
    }, [errors])


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


            {/* hidden div for notifying on errors */}
            {
                errors && (<div className='error-message'>
                    <p>{ errors }</p>
                </div>)
            } 

            <form className="form" onSubmit={handleSubmit}>
                
                {/* Field One - Email Address */}
                <div className="field">
                    <label htmlFor="userEmail">Email Address</label>
                    <input 
                        required 
                        type="email" 
                        value={email}
                        id="userEmail"
                        name="userEmail" 
                        autoComplete="off"
                        placeholder="Email Address"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                
                {/* Field Two - Password with 'forgot password' option */}
                <div className="field"> 
                    <label htmlFor="userEmail">Password</label>
                    <input
                        required 
                        type="password" 
                        value={password}
                        id="userPassword" 
                        name="userPassword" 
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <p className="text-forgot">
                        <a href="/login" className="text-accent">Forgot Password?</a>
                    </p>
                </div>
                
                {/* Field Three - Login Button with Sign Up prompt */}
                <div className="field">
                    <Button 
                        text={'Login'} 
                        customize={'btn btn-block'} 
                        mode={'btn-primary'}  
                    />
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