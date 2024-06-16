import './header.css'
import { Link } from 'react-router-dom'
import TelaLogin  from '../../components/telalogin/telaLogin'
import BagBox from './bagBox/bagBox';
import ConfigBox from './configbox/configBox';
interface Props{
    logoURL: string,
}
function Header({logoURL}:Props){
    return(
        <>
        <header>
            <div className="box login">
                <img className="icones linki" src="../../../image/incons/entrar.png" alt="entrar"  />
                <TelaLogin />
            </div>
            <Link to="/" className="box logo">
                <img className='linki' src={logoURL} alt="logo" />
            </Link>
            <div className="box menu">
                <a className='icones linki' href="/menu">
                    <img src="../../../image/incons/menu.png" alt="menu"/>
                </a>
                <div className='icones linki'>
                    <img src="../../../image/incons/bag.png" alt="bag"/>
                    
                </div>
                <div className='icones linki'>
                    <img className='icones config ' src="../../../image/incons/config.png" alt="config" />
                </div>
            </div> 
            
        </header>
        <BagBox/>
        <ConfigBox/>
        </>
    )
    
}
export default Header;