import HeaderFunc from '../../components/headerfunc/HeaderFunc'
import './ConfFunc.css'
import CFuncMain from "./cffucmain/CFuncMain.tsx";
export default function ConfFunc(){
    return(
        <div className="main">
            <HeaderFunc
            logoURL=''/>
            <CFuncMain/>
        </div>
    )
}