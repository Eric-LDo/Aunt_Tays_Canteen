import './HeaderFunc.css'
import ConfigBox from './configbox/configBox';
import { useState } from 'react';
interface Props{
    logoURL: string,
}
function HeaderFunc({logoURL}:Props){
    const [confVisible,setConfVisible] = useState(false)
    function toggleConfVisibility(){
        setConfVisible(!confVisible)
    }
    return(
        <>
        <header>
            <div className="box box1">
            <a href="#"><img className="icone linki" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAESklEQVR4nO1Za6hVRRSesuxBDyz7EVFkCYlC7wdJUERFEBH1p4cJEqH1IyOJEnoQZRCIEGVQv6KLgRUUmhL1o4c9rkoFkhhidenG1e49e75v7UMYqDWxcA1Mh3see29z7+B8MLDPmVlrf2vWzKy11zg3xBD/D4QQZgC4juTjAF4H8C6A9SRf9t7fMzExcbJrMkIIJ5B8guQ+kqFbA/A7gNtcE0FyDsmdCdnvSL5iXrlPPSEiT5L8yvoPAHhTRG52TUG73T6L5K9GcKuIXNFrPIBnO7z0YZZlpx09xl0A4B0z4jNdXq4PQgjHkDxfRJaSnDBjNrk6ISIXAPgbwJ8iMreoPIDzAHg1xnt/63/DcjAiy21G15XVQfK5qjoqg+QGW1aLyuoAcLEZsqs6o/IktimJfhu8F0IIMwEcAnBQY5CrAwD2mCFzK+o5oHpCCDNdHSD5oxlyYcVM4C9toS6PkNxiJ861ZXV478+1PbLX1QXNo4zEXWV1iMhNpuMLVxcAPGMkni+rg+Qq07HK1QVN/ozER2V1kPza9tktR5ZdMRJ3WhzxmnoUlW+327PjiaWpv6sLmiQaiYfLyIcQjiP5gnn1bVcXYtZbJY547xeaIVtcXSC52Txyf1kd3vuHzJARVxdEZJkZMkbysaLyAJ4mOV41X6uMEMLxMXHUKF9QdgbJ3D4D3qstqkfoaaWnlqYYeZ6f6QaEiFxlE7DDNQUAPrDl8eigMiRfNZnVrikAcLvN7m+Tk5On9BufZdk5JP+wPG2BawpCCMeSHDVjNo6NjZ3YbayIzCL5pXljvWsaWq3WPJL7leDU1NTZ3caRvNyMmOo1rlZoKt7PEACXmOd+cE0Frbyje6DbmCzL5ptHdrumgmTbZntDnucXdfbrf1qQi0HUNRFZls3X4JaUTTWrXauVSKtGro2ZrrX9+nXomgTv/UIAv8ScCcAbWhmx32JNjTuoFfqkjLQ7z/Nr6ubvRORKkm9pVDfS37RarVPNuAUAmHgIMWaIyBkAttv/KjsiIlcfVfJa3wWwONa0Oq4MlsdxAFZO079ymipl2r+d5JJecagyNGIrEQCTyYs1x1pNckWyL27QOm6ytFKih7RPxyT7ZYXqAJAl41oAnorePWJRG8Ajqjx50bckHxgfHz8pjgPwUkIC9rwGwPfW1sQlFnWpTJRXL5BcknpajdP8TTlUMkLvLQB8nMyq1rFu7GawpicJifftU3aXNn3W/xJdG7sRBHA9yc8TXZ8AOL2UETZDo8l12R39ZHQp6He8Nn0WkbsjGe/9vZ39Ayaj++IlUroCBoae+6bgZ72YKazgMJFPEw+UKsDh8B3KT6bjtULCGoHtzNcNe1kZAmp8R4DU5zkldV0aK/bTZQy9BF80ApvLvNh0PNh5aul1WwV9mwpXJGOwUjIVXjwyzfX0uqoTA2DbwEJpRG5aA8AiF/+hyS0McHs8xBBDuH/hH2ZaTawb6rQ8AAAAAElFTkSuQmCC"/></a>
            </div>
            
            <div className="box box2">
                <a href="funcionarios">
                    <img className='logo linki' src={logoURL} alt="logo"/>
                </a>
            </div>
            <div className="box box3">
                <img className='icone linki' src="../../../image/incons/config.png" alt="config"  onClick={toggleConfVisibility}/>
            </div> 
            
        </header>
        {confVisible?<ConfigBox/>:null}
        
        </>
    )
    
}
export default HeaderFunc;