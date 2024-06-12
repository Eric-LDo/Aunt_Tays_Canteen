import './pagehome.css'
import Header from '../../components/header/header';
import TagMain from '../../components/tagmain/tagMain';



export default function PageHome(){
    return( 
        <div className="pagehome"> 
            <Header logoURL={'../image/logo/logo.png'}/>
        
            <TagMain/>
                
            {/* <Footer/> */}
        </div>
    )
}   