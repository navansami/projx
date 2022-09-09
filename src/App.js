import { useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

// Components/Hooks
import { useLogin } from './hooks/useLogin';


// Main Pages
import Home from "./pages/Home";
import Login from "./pages/Login";


const App = () => {

  const { token } = useLogin()
  const navigate = useNavigate();

  // programatically redirect according to token
  useEffect(() => {
    if(!token) {
        navigate('/login', { replace: true })
    }
    if(token) {
        navigate('/home', { replace: true })
    }
  }, [ token, navigate]);


  return (
    <div className="app">
                
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />}  />
      </Routes>

  </div>
  );
}

export default App;