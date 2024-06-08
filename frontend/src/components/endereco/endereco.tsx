import './endereco.css'
export default function Endereco(){
    return(
        <div className="Endereco">
            <h2>Endereço</h2>
            <form action="post">
                <label htmlFor="rua">
                    Rua: <input type="text" />
                </label>
                <br/>
                <label htmlFor="bairro">
                    Bairro: <input type="text" />
                </label>
                <br />
                <label htmlFor="numero">
                    Nº: <input type="number"/>
                </label>
                <br />
                <label htmlFor="cidade">
                    Cidade: <input type="text"/>
                </label>
                <br />
                <label htmlFor="cep">
                    CEP: <input type="text"/>
                </label>
                <br />
                <label htmlFor="complemento">
                    Complemento: <input type="text"/>
                </label>
            </form>
        </div>
    )
}