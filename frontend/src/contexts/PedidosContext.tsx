// src/contexts/PedidosContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import ItensPedidos from '../interfaces/ItensPedidos';
import Produtos from '../interfaces/Produtos';

interface PedidosContextProps {
  itensPedidos: ItensPedidos[];
  adicionarItemPedido: (produto: Produtos, quantidade: number) => void;
}

const PedidosContext = createContext<PedidosContextProps | undefined>(undefined);

export const usePedidos = () => {
  const context = useContext(PedidosContext);
  if (!context) {
    throw new Error('usePedidos must be used within a PedidosProvider');
  }
  return context;
};

export const PedidosProvider = ({ children }: { children: ReactNode }) => {
  const [itensPedidos, setItensPedidos] = useState<ItensPedidos[]>([]);
  const [idPedido, setIdPedido] = useState(1); // Id fictício para cada pedido

  const adicionarItemPedido = (produto: Produtos, quantidade: number) => {
    const novoItem: ItensPedidos = {
      id: itensPedidos.length + 1,
      idPedido,
      produto,
      quantidade,
      valorTotal: produto.preco * quantidade,
    };
    setItensPedidos((prev) => [...prev, novoItem]);
  };

  return (
    <PedidosContext.Provider value={{ itensPedidos, adicionarItemPedido }}>
      {children}
    </PedidosContext.Provider>
  );
};
