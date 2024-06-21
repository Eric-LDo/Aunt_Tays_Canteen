import './produBag.css'
export interface Props{
    id:number
    nome:string,
    valor:number,
    quantidade:number
}

export default function produBag({id,nome,valor,quantidade}:Props){
    return(
        <div className="proBagCont" key={id}>
            <h3>{nome}</h3>
            <p>{`Valor: R$ ${valor*quantidade}`}</p>
            <input type="number" value={quantidade}/>
        </div>
    )
}