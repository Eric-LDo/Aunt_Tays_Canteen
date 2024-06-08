import './cadastro.css'
import Endereco from "../endereco/endereco"
import { useState } from 'react'
export default function Cadastro(){
    const [hiden, setHiden] = useState(true)
    function isHiden(){
        setHiden(!hiden)
    }
    return(
        <div className="cadastro">
            <h1>Cadastro</h1>
            <form>
                <label>Nome:
                    <input type="text" />
                </label>
                <br />
                <label>Email:
                    <input type="email" />
                </label>
                <br />
                <label htmlFor="telefone">Telefone: <input type="text" name="telefone" data-mask="(00) 0000-0000" data-mask-selectonfocus="true" /></label>

                <br />
                <label>Senha:
                    <input type={hiden? 'password':'text'} /><div className={`viwpassword ${hiden? 'pshiden':'psshow'}`} onClick={isHiden}></div><br />
                       Confirme a Senha:
                    <input type={hiden? 'password':'text'} />


                </label>
                <br />
                <label htmlFor=""><Endereco/>
                </label>

                


            </form>
        </div>
    )
}