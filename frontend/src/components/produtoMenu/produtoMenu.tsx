
import './produtoMenu.css'

export interface Props {
  nome:string,
  ingredientes:string,
  descricao:string,
  preco:number,
  imagem:string,
  id:number
}

export default function produtoMenu({ nome, ingredientes, descricao, preco,imagem}: Props){
  return(
    <div className="container">
      <img className='produtoAmostra' src={imagem} alt="" />
      <div className="descricao">
        <h2>{nome}</h2>
        <p>{ingredientes}</p>
        <p>{descricao}</p>
        <p>Valor:{` R$ ${preco.toFixed(2)}`}</p>
      </div>
    </div>
  )
}
