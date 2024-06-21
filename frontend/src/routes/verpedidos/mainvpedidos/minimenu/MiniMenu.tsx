import './MiniMenu.css'
interface Props{
    id:number
}
export default function MiniMenu({id}:Props){
    return (
        <div key={id} className="mini-menu">
            <ul>
                <li>
                    Cancelar
                </li>
                <li>
                    Receber
                </li>
                <li>
                    Pronto
                </li>
            </ul>
        </div>
    )
}