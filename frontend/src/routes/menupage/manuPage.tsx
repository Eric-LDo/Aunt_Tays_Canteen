import './menuPage.css'
import Header from '../../components/header/header'
import MainMenu from '../../components/mainMenu/mainMenu'
import TelaLogin from '../../components/telalogin/telaLogin'
export default function MenuPage(){
    return(
        <div className="menuPage">
            <Header logoURL={'../../../../image/logo/logoMenu.png'}/>
            <MainMenu />
            <TelaLogin/>
        </div>
    )
}