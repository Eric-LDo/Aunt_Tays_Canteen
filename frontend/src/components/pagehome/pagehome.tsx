import Header from "../header/header";
import TagMain from "../tagmain/tagMain";


function PageHome(){
    return( 
        <>   
            <Header logoURL={'../image/logo/logo.png'}/>
        
            <TagMain/>
                
            {/* <Footer/> */}
        </>
    )
}   

export default PageHome;