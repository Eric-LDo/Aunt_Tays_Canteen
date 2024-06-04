import { useState } from 'react';
import ButtonMenu from '../buttonMenu/buttonMenu';
import Closed from '../closed/closed';
import './confBox.css';
interface Props{
    nome:string,
    ingredientes:string,
    descricao:string,
    preco:number,
    id:number
    imagem:string
}

export default function ConfBox({nome,ingredientes,descricao,preco,imagem}:Props){
    
    const [isVisible, setIsVisible] = useState(true)
    

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        
        <div className="ConfBox" >
        <div className="descricao">
            <div onClick={toggleVisibility}><Closed/></div>
            <img src={imagem} alt="" />
            <h2>{nome}</h2>
            <p>{ingredientes}</p>
            <p>{descricao}</p>
            <p>Valor:{` R$ ${preco.toFixed(2)}`}</p>
            <input type="number" />
            <ButtonMenu buttonName={'Confirmar'} />
        </div>
        </div>
    )
    
}
