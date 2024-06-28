// ConfBox.tsx
import ButtonMenu from '../buttonMenu/buttonMenu';
import Closed from '../closed/closed';
import './ConfBox.css';
import { useState } from 'react';
import { usePedidos } from '../../contexts/PedidosContext';
import Produtos from '../../interfaces/Produtos';

interface Props {
  disp: () => void;
  nome: string;
  ingredientes: string;
  descricao: string;
  preco: number;
  id: number;
  imagem: string;
}

export default function ConfBox({ disp, nome, ingredientes, descricao, preco, id, imagem }: Props) {
  const [quantidade, setQuantidade] = useState(1);
  const { adicionarItemPedido } = usePedidos();

  const handleConfirmar = () => {
    const produto: Produtos = { id, nome, ingredientes, descricao, preco, img: imagem };
    adicionarItemPedido(produto, quantidade);
    disp();
  };

  return (
    <div key={id} className="confBox">
      <div className="confCont">
        <div className='closed' onClick={disp}><Closed /></div>
        <img className="broImg" src={imagem} alt="" />
        <h2>{nome}</h2>
        <p>{ingredientes}</p>
        <p>{descricao}</p>
        <p>Valor:{` R$ ${preco.toFixed(2)}`}</p>
        <label htmlFor="">Quantidade:<input type="number" value={quantidade} onChange={(e) => setQuantidade(Number(e.target.value))} placeholder='1' /></label>
        <div className='button' onClick={handleConfirmar}>
          <ButtonMenu buttonName={'Confirmar'} />
        </div>
      </div>
    </div>
  );
}
