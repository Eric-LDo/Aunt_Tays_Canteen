import './menuPage.css'
import Header from '../../header/header'
import MainMenu from '../../mainMenu/mainMenu'
export default function menuPage(){
    return(
        <div className="menuPage">
            <Header logoURL={'../../../../image/logo/logoMenu.png'}/>
            <MainMenu />
        </div>
    )
}