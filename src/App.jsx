import './App.css'
import Home from './vistas/home'
import Login from './vistas/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './componentes/Footer'
import AppBar from './componentes/AppBar'
import { useState } from 'react'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const login = async (user) => {
    const data = await fetch("http://localhost:5001/login",{method :"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    });
    //Convertir la respuesta json
    const res = await data.json();
    setIsLogin(res.isLogin);
    return res.isLogin;
  };
  const logout = () => {
    setIsLogin(false);
  };
  return (
    <BrowserRouter>
    {isLogin && <AppBar logout={logout} />}
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login login={login} />} />    
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App
