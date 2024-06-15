import ButtonMenu from "../buttonMenu/buttonMenu";
import Closed from '../closed/closed'
import React, { useState } from "react";
import './telaLogin.css'
import { Link } from "react-router-dom";


const TelaLogin: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    

    function loginDeUsuario(e: { preventDefault: () => void; }){
        e.preventDefault()
        console.log(`Email:${email}\nSenha:${password}`)
    }
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
return (

<div className="telaLogin" style={{ display: isVisible ? 'block' : 'none' }}>
 
<div className="form" >
    <div className="closed" onClick={toggleVisibility}><Closed/></div>
    <form method="post" action="#" onSubmit={loginDeUsuario}>
        <h1>Log in</h1>
        <label htmlFor="email">
            Email:<input type="email" id="in1"  placeholder="Enter your email here" onChange={(e) => {setEmail(e.target.value);
               }}/>
        </label>
        <br/>
        <label htmlFor="password">
            
            Password:<input type="password" name="password" id="in2" placeholder="Enter your password here" onChange={(e) => setPassword((e.target.value))}/>
        </label>
        <p>you don't have a <Link to="/cadastro">registration</Link></p>
        <div onClick={toggleVisibility}>
            <ButtonMenu buttonName={'Enter'}/>
        </div>
    </form>
</div>
</div>
)
}

export default TelaLogin;


