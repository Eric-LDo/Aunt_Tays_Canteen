import ButtonMenu from "../../buttonMenu/buttonMenu"
import ProduBag from "./produBag/produBag"
import "./bagBox.css"

export default function BagBox(){
    const testando=[
        {
            id: 1,
            name: "Bag 1",
            price: 100,
            quantidade: 3
        },
        {
            id: 2,
            name: "Bag 2",
            price: 200,
            quantidade: 2
        
        }
    ]
    return(
        <div className="bagContainer">
            <form  action="post">
                <h2>Pedidos</h2>
                {testando.map((e)=>{
                    return(
                        <ProduBag
                        id={e.id}
                        nome={e.name}
                        valor={e.price}
                        quantidade={e.quantidade}
                        />
                    )
                })}
                <div>
                    <ButtonMenu
                    buttonName="confirmar pedido"
                    />
                </div>
            </form>
        </div>
    )
}