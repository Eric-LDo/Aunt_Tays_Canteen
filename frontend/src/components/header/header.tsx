import './header.css'
import Config from './config/config'
import Login from './login/login'
import Bag from './bag/bag'
interface Props{
    logoURL: string,
}
function Header({logoURL}:Props){
    return(
        <header>
            <Config/>
            <div className="logo img h2"><img src={logoURL} alt="logo" /></div>
            <div className="img h3">
                <Login/>
                <img src="../../../image/incons/menu.png" alt="menu"/>
                <Bag/>
            </div> 
        </header>

        
    )
    
}
export default Header;