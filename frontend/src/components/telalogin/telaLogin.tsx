import ButtonMenu from "../buttonMenu/buttonMenu";
import Closed from '../closed/closed'
import './telaLogin.css'

function TelaLogin(){

return (
<div className="telaLogin" >
 
<div className="form">
    <div ><Closed /></div>
    <form method="post" action="#">
        <h1>Log in</h1>
        <label htmlFor="email">
            Email:<input type="email" id="in1"  placeholder="Enter your email here"/>
        </label>
        <br/>
        <label htmlFor="password">
            Password:<input type="password" name="password" id="in2" placeholder="Enter your password here"/>
        </label>
        <p>you don't have a <a href="#">registration</a></p>
        <ButtonMenu buttonName={'Enter'}/>
    </form>
</div>
</div>
)
}
export default TelaLogin;
