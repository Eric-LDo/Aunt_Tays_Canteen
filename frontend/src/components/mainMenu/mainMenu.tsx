
import ProdutoMenu from '../produtoMenu/produtoMenu'
import './mainMenu.css';
import Pro from '../../conection/produtos.json'

export interface mainMenuProps {
  prop?: string;
}

export default function mainMenu(){
   return(<>
    <main>
      <section>
        <div className="mainMenu">
          {
            Pro.map((item) => {
              return <ProdutoMenu 
              
              nome={item.name}
              preco={item.valor}
              imagem={item.imagem}
              ingredientes={`Ingredientes: ${item.ingredientes.join(", ")}`}
              descricao={item.descricao}
              id={item.id}
              />
                })
          }
        </div>
      </section>
    </main>
   </>
   )
}

