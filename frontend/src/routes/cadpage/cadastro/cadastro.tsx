import './cadastro.css'
import { useState } from 'react';

export default function Cadastro() {
    const [hiden, setHiden] = useState(true);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState(0);
    const [complemento, setComplemento] = useState('');

    function isHiden() {
        setHiden(!hiden);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (senha !== confirmarSenha) {
            alert('As senhas não são iguais');
            return;
        }

        try {
            
            const clienteResponse = await fetch('http://localhost:8080/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    email,
                    telefone,
                    senha,
                    rua,
                    bairro,
                    cidade,
                    cep,
                    numero,
                    complemento,
                }),
            });

            if (!clienteResponse.ok) {
                throw new Error('Erro ao cadastrar o cliente');
            }
            const clienteData = await clienteResponse.json();
            const pessoaId = clienteData.idPessoa;
            const pessoaResponse = await fetch(`http://localhost:8080/pessoas/${pessoaId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    email,
                    telefone,
                    senha,
                }),
            });

            if (!pessoaResponse.ok) {
                throw new Error('Erro ao atualizar dados da pessoa');
            }

            alert('Cliente cadastrado com sucesso e dados de pessoa atualizados!');
            setNome('');
            setEmail('');
            setTelefone('');
            setSenha('');
            setConfirmarSenha('');
            setRua('');
            setBairro('');
            setCidade('');
            setCep('');
            setNumero(0);
            setComplemento('');
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar o cliente: ' + error);
        }
    };

    return (
        <div className="cadastro">
            <h1>Cadastro de Cliente</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <br />
                <label>
                    Telefone:
                    <input
                        type="text"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required 
                    />
                </label>
                <br />
                <label>
                    Senha:
                    <input type={hiden ? 'password' : 'text'} value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    <div className={`viwpassword ${hiden ? 'pshiden' : 'psshow'}`} onClick={isHiden}></div>
                </label>
                <br />
                <label>
                    Confirme a Senha:
                    <input type={hiden ? 'password' : 'text'} value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />
                    {confirmarSenha !== senha ? <p className="error">As senhas não são iguais</p> : null}
                </label>
                <br />
                <label>
                    Rua:
                    <input type="text" value={rua} onChange={(e) => setRua(e.target.value)} />
                </label>
                <br />
                <label>
                    Bairro:
                    <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                </label>
                <br />
                <label>
                    Cidade:
                    <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                </label>
                <br />
                <label>
                    CEP:
                    <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
                </label>
                <br />
                <label>
                    Número:
                    <input type="number" value={numero} onChange={(e) => setNumero(e.target.valueAsNumber)} />
                </label>
                <br />
                <label>
                    Complemento:
                    <input type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                </label>
                <br />
                <button type="submit">Cadastrar Cliente</button>
            </form>
        </div>
    );
}
