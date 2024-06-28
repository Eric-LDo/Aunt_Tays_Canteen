import './menuPage.css'
import Header from '../../components/header/header'
import MainMenu from './mainMenu/mainMenu'
export default function MenuPage(){
    return(
        <div className="page">
            <Header logoURL={'../../../../image/logo/logoMenu.png'}/>
            <MainMenu />
        </div>
    )
}