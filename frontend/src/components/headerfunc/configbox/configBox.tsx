import { useUser } from "../../../contexts/UserContext"
import "./configBox.css"
const ConfigBox = ()=>{
    const {setUser} = useUser()
    const sair=()=>{
        setUser(null)
    }
    return (
        <div className="configContainer">
            <nav>
                <ul>
                    <li><a className="conf" href="funcionarios">Home</a></li>
                    <li><a className="conf" href="#">Editar perfil</a></li>
                    <li><a className="conf" href="funcionarios">Ver pedidos</a></li>
                    <li><a className="conf" href="/" onClick={sair}>Sair</a></li>
                </ul>
            </nav>

        </div>
    )
}
export default ConfigBox;