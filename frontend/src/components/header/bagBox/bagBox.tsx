import { useState } from 'react';
import ButtonMenu from "../../buttonMenu/buttonMenu";
import "./bagBox.css";
import { usePedidos } from '../../../contexts/PedidosContext';
import { useUser } from '../../../contexts/UserContext';

export default function BagBox() {
  const { itensPedidos } = usePedidos();
  const { user } = useUser();
  const [quantidades, setQuantidades] = useState<number[]>(itensPedidos.map(item => item.quantidade ?? 1));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      alert('Usuário não autenticado');
      return;
    }

    try {
      // Validar se há itens no pedido
      if (itensPedidos.length === 0) {
        alert('Adicione itens ao pedido antes de confirmar.');
        return;
      }

      // Validar quantidades dos itens do pedido
      for (let i = 0; i < itensPedidos.length; i++) {
        if (quantidades[i] <= 0) {
          alert(`A quantidade para o item ${itensPedidos[i].produto.nome} deve ser maior que zero.`);
          return;
        }
      }

      // Montando o objeto pedido a ser enviado
      const pedido = {
        cliente_id: user.idPessoa,
        dataPedido: new Date().toISOString(),
        id: null, // Simula um ID que seria gerado pelo backend
        itensPedidos: itensPedidos.map((item, index) => ({
          quantidade: quantidades[index],
          produto_id: item.produto.id,
        }))
      };

      console.log('Pedido a ser enviado:', pedido);

      // Enviar o POST para criar o pedido e obter o ID gerado
      const responsePedido = await fetch('http://localhost:8080/pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pedido),
      });

      if (!responsePedido.ok) {
        throw new Error('Erro ao criar pedido');
      }

      const pedidoCriado = await responsePedido.json(); // Obtendo o pedido criado com o ID gerado

      // Montar e enviar os itens do pedido com o ID do pedido criado
      await Promise.all(
        itensPedidos.map(async (item, index) => {
          const itemPedido = {
            pedido_id: pedidoCriado.idPedido,
            cliente_id: user.idPessoa,
            produto_id: item.produto.id,
            quantidade: quantidades[index],
          };

          const responseItemPedido = await fetch('http://localhost:8080/itensPedidos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemPedido),
          });

          if (!responseItemPedido.ok) {
            throw new Error(`Erro ao adicionar item ${item.produto.nome}`);
          }
        })
      );

      // Se chegou até aqui, todos os itens foram adicionados com sucesso
      alert('Pedido enviado com sucesso!');

      // Limpar o carrinho de compras após o envio bem-sucedido
      setQuantidades(itensPedidos.map(item => item.quantidade ?? 1));

    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      alert('Erro ao enviar pedido: ' + error);
    }
  };

  const handleQuantidadeChange = (index: number, quantidade: number) => {
    setQuantidades(prevQuantidades => {
      const novasQuantidades = [...prevQuantidades];
      novasQuantidades[index] = quantidade;
      return novasQuantidades;
    });
  };

  return (
    <div className="bagContainer">
      <form onSubmit={handleSubmit}>
        <h2>Itens do Pedido</h2>
        {itensPedidos.map((e, index) => (
          <div key={e.produto.id} className="produtoItem">
            <div>
              <h3>{e.produto.nome}</h3>
              <p>Valor: R${e.produto.preco.toFixed(2)}</p>
            </div>
            <div>
              <input
                type="number"
                value={quantidades[index]}
                onChange={(event) => handleQuantidadeChange(index, parseInt(event.target.value))}
                min={1}
              />
            </div>
          </div>
        ))}
        <div>
          <ButtonMenu buttonName="Confirmar Itens do Pedido" />
        </div>
      </form>
    </div>
  );
}
