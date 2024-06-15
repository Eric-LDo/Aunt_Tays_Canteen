import './produBag.css'
export interface Props{
    id:number
    nome:string,
    valor:number,
    quantidade:number
}

export default function produBag({nome,valor,quantidade}:Props){
    return(
        <div className="proBagCont">
            <h3>{nome}</h3>
            <p>{`Valor: R$ ${valor*quantidade}`}</p>
            <input type="number" value={quantidade}/>
        </div>
    )
}