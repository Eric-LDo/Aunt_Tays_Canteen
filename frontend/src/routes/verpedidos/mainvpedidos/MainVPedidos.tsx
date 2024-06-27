
// import { useState } from "react"
// import Pedidos from "../../../conection/Pedidos.json"
// import './MainVPedidos.css'
// import MiniMenu from "./minimenu/MiniMenu"
export default function MainVPedidos(){
    
    return(
        <div className="container">
            {/* <h1>Ver Pedidos</h1>
            <ul>
                {Pedidos.map((p)=>{
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const [confVisible,setConfVisible]= useState(false)
                    function toggleVisibility(){
                        setConfVisible(!confVisible)
                    }
                    return <li key={p.id} onClick={toggleVisibility}>
                        <div className={`container id${p.id}`}>
                        <h2>Cliente: {p.cliente.nome}</h2>
                        <p>Data do Pedido: {p.dataPedido}</p>
                        <div className="itens">
                            {p.itensPedidos.map((item, index) => {
                            return(
                            <div key={index} className="item">
                            
                            <img className="imapro" src={item.produto.imagem} alt="" />
                            <p>Produto: {item.produto.name}</p>
                            <p>Quantidade: {item.quantidade}</p>
                            <p>Valor: R$ {item.valorTotal}</p>
                        </div>
                        )})}
                        </div>
                        {confVisible? <MiniMenu id={p.id}/> : null}
                    </div>
                    </li>
                })}
            </ul> */}

        </div>
    )
}