import './ListProd.css'
import {useState} from "react";
import Prod from "./prod/Prod";


export default function ListProd(){
const [Prods, setProds] = useState([])
    fetch("http://localhost:8080/produtos")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // ou response.text(), response.blob(), etc., conforme necessário
        })
        .then(data => {
            console.log(data)
            return setProds(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
   return(
    <div className="container">
        <h1>
            Lista de Produtos
        </h1>
        {
            Prods.map((item) => {
                return <Prod
                    id={item.id}
                    img={item.img}
                    nome={item.nome}
                    ingredientes={item.ingredientes}
                    descricao={item.descricao}
                    preco={item.valor}
                 />
            })
        }

    </div>
   )
}
