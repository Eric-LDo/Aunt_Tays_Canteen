import './Prod.css'
import Props from '../../../../interfaces/Produtos.tsx'
export default function Prod({id, nome, ingredientes, descricao,preco, img }:Props){
    return(
        <div className="produtobox">
            <h2>
                {nome}
            </h2>
            <img src={img} className="imgprod"/>
            <p>{"identificador" + id}</p>
            <p>
                {"Igredientes:"+ingredientes}
            </p>
            <p>
                {descricao}
            </p>
            <p>{preco}</p>


        </div>
    )
}