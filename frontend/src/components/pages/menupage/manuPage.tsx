import './menuPage.css'
import Header from '../../header/header'
import MainMenu from '../../mainMenu/mainMenu'
import TelaLogin from '../../telalogin/telaLogin'
export default function menuPage(){
    return(
        <div className="menuPage">
            <Header logoURL={'../../../../image/logo/logoMenu.png'}/>
            <MainMenu />
            <TelaLogin/>
        </div>
    )
}