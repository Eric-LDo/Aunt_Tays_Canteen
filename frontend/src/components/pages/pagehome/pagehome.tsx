import './pagehome.css'
import Header from "../../header/header";
import TagMain from "../../tagmain/tagMain";



export default function PageHome(){
    return( 
        <div className="pagehome"> 
            <Header logoURL={'../image/logo/logo.png'}/>
        
            <TagMain/>
                
            {/* <Footer/> */}
        </div>
    )
}   