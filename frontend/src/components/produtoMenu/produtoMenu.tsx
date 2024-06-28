
import './produtoMenu.css'
import {useState} from 'react'
import ConfBox from '../confbox/ConfBox'



export interface Props {
  nome:string,
  ingredientes:string,
  descricao:string,
  preco:number,
  imagem:string,
  id:number
}

export default function produtoMenu({ id, nome, ingredientes, descricao, preco,imagem}: Props){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility= ()=>{
    setIsVisible(!isVisible) 
  }
  
  return(
    <>
      <div key={id} className="menuprodbox" onClick={toggleVisibility}>
        <img className='produtoAmostra' src={imagem} alt="" />
        <div className="descricao">
          <h2>{nome}</h2>
          <p>{ingredientes}</p>
          <p>{descricao}</p>
          <p>Valor:{` R$ ${preco.toFixed(2)}`}</p>
        </div>
      </div>
      <div className='boxConfiguration' style={{display: isVisible? 'block': 'none'}}>
          <ConfBox
            disp={toggleVisibility}
            id={id}
            nome={nome}
            ingredientes={ingredientes}
            descricao={descricao}
            preco={preco}
            imagem={imagem}
          />
      </div>
    </>
  )
}


