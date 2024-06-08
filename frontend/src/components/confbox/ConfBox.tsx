import { useState } from 'react';
import ButtonMenu from '../buttonMenu/buttonMenu';
import Closed from '../closed/closed';
import './confBox.css';
interface Props{
    disp:boolean,
    nome:string,
    ingredientes:string,
    descricao:string,
    preco:number,
    id:number
    imagem:string
}

export default function ConfBox({disp,nome,ingredientes,descricao,preco,imagem}:Props){
    
    const [isVisible, setIsVisible] = useState(true)
    

    const toggleVisibility = () => {
        ((disp=isVisible) || isVisible)? setIsVisible(!isVisible):setIsVisible(disp);
    };
    return (
        
        <div className="confBox" style={{display: isVisible? 'block': 'none'}}>
        <div className="confCont">
            <div className='closed' onClick={toggleVisibility}><Closed/></div>
            <img className="broImg"src={imagem} alt="" />
            <h2>{nome}</h2>
            <p>{ingredientes}</p>
            <p>{descricao}</p>
            <p>Valor:{` R$ ${preco.toFixed(2)}`}</p>
            <label htmlFor="">Quantidade:<input type="number" placeholder='1'/></label>
            <div className='button'>
                <ButtonMenu buttonName={'Confirmar'} />
            </div>
        </div>
        </div>
    )
    
}
