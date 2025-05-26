import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({login}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onsubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Por favor, ingrese usuario y contraseña");
            return;
        }
        
        const isLogin = await login({username, password});
        if (isLogin) {
            navigate("/home");
        }
    };
    
  return (
    <form onSubmit={onsubmit}>
        <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
        />

        <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
  );
};

export default Login
