import './Prod.css'
import Props from '../../../../interfaces/Produtos.tsx'
import EditProd from "./editprod/EditProd.tsx";
import {useState} from "react";
export default function Prod({id, nome, ingredientes, descricao,preco, img }:Props){
    const [edicao, setEdicao] = useState(false)
    function toggleEditor(){
        setEdicao(!edicao)
    }
    async function deletaContato() {
        const retorno = await fetch(`http://localhost:8080/produtos/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Produto deletado");

            });
        console.log(retorno)
    }

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
            <button onClick={deletaContato}>
                Deletar
            </button>
            <button onClick={toggleEditor}>editar</button>
            {edicao?<EditProd
            id={id}
            nome={nome}
            ingredientes={ingredientes}
            descricao={descricao}
            preco={preco}
            img={img}
            />:null}
        </div>
    )
}