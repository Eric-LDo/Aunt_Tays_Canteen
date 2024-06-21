import './header.css'

import TelaLogin  from '../../components/telalogin/telaLogin'
import BagBox from './bagBox/bagBox';
import ConfigBox from './configbox/configBox';
import { useState } from 'react';
interface Props{
    logoURL: string,
}
function Header({logoURL}:Props){
    const [loginVisible, setLoginVisible] = useState(false)
    function isLoginV(){
        setLoginVisible(!loginVisible)
    }
    const [confVisible, setConfVisible] = useState(false)
    function isConfV(){
        setConfVisible(!confVisible)
        bagVisible?setBagVisible(false):setBagVisible(bagVisible)

    }
    const [bagVisible, setBagVisible] = useState(false)
    function isBagV(){
        setBagVisible(!bagVisible)
        confVisible?setConfVisible(false):setConfVisible(confVisible)
    }
    return(
        <>
        <header>
            <div className="box box1">
                <img className="icone linki" onClick={isLoginV} src="../../../image/incons/entrar.png" alt="entrar"  />
                {loginVisible?<TelaLogin
                onClosed={isLoginV}
                />:null}
            </div>
            <div className="box box2">
                <a href="/">
                    <img className='linki logo' src={logoURL} alt="logo" />
                </a>
            </div>
            <div className="box box3">
                <a  href="/menu">
                    <img className='linki icone' src="../../../image/incons/menu.png" alt="menu"/>
                </a>
                <div onClick={isBagV}>
                    <img className='linki icone'  src="../../../image/incons/bag.png" alt="bag"/>
                </div>
                <div onClick={isConfV}>
                    <img className='icone linki config ' src="../../../image/incons/config.png" alt="config" />
                </div>
            </div> 
            
        </header>
        {bagVisible?<BagBox/>:null}

        {confVisible?<ConfigBox/>:null}
        </>
    )
    
}
export default Header;