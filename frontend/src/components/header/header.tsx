import './header.css'
interface Props{
    logoURL: string,
}
function Header({logoURL}:Props){
    return(
        <>
            <header>
                <div className="img h1"><img src="../../../image/incons/config.png" alt="config"/></div>
                <div className="logo img h2"><img src={logoURL} alt="logo" /></div>
                <div className="img h3">
                    <img src="../../../image/incons/entrar.png" alt="entrar"/>
                    <img src="../../../image/incons/menu.png" alt="menu"/>
                    <img src="../../../image/incons/bag.png" alt="bag"/>
                </div> 
            </header>
        </>
        
    )
    
}
export default Header;