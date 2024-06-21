import "./configBox.css"
const ConfigBox = ()=>{
    return (
        <div className="configContainer">
            <nav>
                <ul>
                    <li><a className="conf" href="funcionarios">Home</a></li>
                    <li><a className="conf" href="#">Editar perfil</a></li>
                    <li><a className="conf" href="funcionarios">Ver pedidos</a></li>
                    <li><a className="conf" href="#">Sair</a></li>
                </ul>
            </nav>

        </div>
    )
}
export default ConfigBox;