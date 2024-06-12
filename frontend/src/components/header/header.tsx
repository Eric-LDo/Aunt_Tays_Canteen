import './header.css'
import Config from './config/config'
import Login from './login/login'
import Bag from './bag/bag'
import { Link } from 'react-router-dom'
interface Props{
    logoURL:string, 
    linkHome:string,
    linkMenuPage:string
}
function Header({logoURL, linkHome,linkMenuPage}:Props){
    return(
        <header>
            <div className="img"><Config/></div>
            <Link to={linkHome}><img src={logoURL} alt="logo" /></Link>
            <div className="img h3">
                <Login/>
                <Link to={linkMenuPage}><img src="../../../image/incons/menu.png" alt="menu"/></Link>
                <Bag/>
            </div> 
        </header>

        
    )
    
}
export default Header;