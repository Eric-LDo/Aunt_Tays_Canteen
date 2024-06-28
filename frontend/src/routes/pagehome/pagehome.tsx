import './pagehome.css'
import Header from '../../components/header/header';
import Sections from './tagmain/section/sections';



export default function PageHome(){
    return( 
        <div className="page"> 
            <Header logoURL={'../image/logo/logo.png'}/>
        
            <Sections 
                titulo={'About our company'}
                sub1={'Mission Statemant'}
                texto1={
                    'Through our passion for sweets and music, we want to touch hearts, unite peaple and transform the world into a sweeter and more melodious place'
                }
                sub2={'Vision Statement'}
                texto2={'To be references for quality and flavor. Bring sweetness and some music to brighten your day!'}
                sub3='Values'
                texto3={'Quality, innovation, satisfaction, nostagia, euphoria'}
                />
                
            
        </div>
    )
}   