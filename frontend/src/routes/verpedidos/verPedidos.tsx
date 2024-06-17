import Header from '../../components/header/header'
import './verPedidos.css'

export default function VerPedidos(){
    return(
        <>
            <Header logoURL=''/>
            <div className='ver-pedidos-container'>
                <h1>Ver Pedidos</h1>
                <table className='ver-pedidos-table'>
                    <tr>
                        <th>Id do Pedido</th>
                        <th>Data do Pedido</th>
                        <th>Valor Total</th>
                        <th>Status do Pedido</th>
                    </tr>
                </table>
            </div>

            
        </>
    )
        
    
}