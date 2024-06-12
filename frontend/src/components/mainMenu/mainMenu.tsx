
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
              id={item.id}
              imagem={item.imagem}
              nome={item.name}
              ingredientes={`Ingredients: ${item.ingredientes.join(", ")}`}
              descricao={item.descricao}
              preco={item.valor}
              />
                })
          }
        </div>
      </section>
    </main>
   </>
   )
}

