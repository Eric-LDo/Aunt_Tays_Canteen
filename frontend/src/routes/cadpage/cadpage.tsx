import './cadpage.css'
import Header from '../../components/header/header'
import Cadastro from './cadastro/cadastro'
export default function CadPage(){
    return (
        <div className='container'>
            <Header
                logoURL=''
            />
            <Cadastro/>

        </div>
    )
}