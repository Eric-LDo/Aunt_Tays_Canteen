import { useEffect, useState } from 'react';
import ProdutoMenu from '../../../components/produtoMenu/produtoMenu';
import './mainMenu.css';
import Produtos from '../../../interfaces/Produtos';

export default function MainMenu() {
  const [Pro, setPro] = useState<Produtos[]>([]);
  
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:8080/produtos', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data = await response.json();
        setPro(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        alert('Erro ao buscar produtos. Tente novamente mais tarde.');
      }
    };

    fetchProdutos();
  }, []);

  return (
    <main>
      <section>
        <div className="container">
          {Pro.map((item) => (
            <ProdutoMenu
              key={item.id}
              id={item.id}
              imagem={item.img}
              nome={item.nome}
              ingredientes={item.ingredientes}
              descricao={item.descricao}
              preco={item.preco}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
