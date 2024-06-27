// CadFunc.tsx
import React, { useState } from 'react';

const CadFunc: React.FC = () => {
    const [hiden, setHiden] = useState(true);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [cargo, setCargo] = useState('Administrador');
    const [permicaoLevel, setPermicaoLevel] = useState(1);

    const isHiden = () => setHiden(!hiden);

    const changeNome = (e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value);
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const changeTelefone = (e: React.ChangeEvent<HTMLInputElement>) => setTelefone(e.target.value);
    const changeSenha = (e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value);
    const changeConfirmarSenha = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmarSenha(e.target.value);
    const changeCargo = (e: React.ChangeEvent<HTMLSelectElement>) => setCargo(e.target.value);
    const changePermicaoLevel = (e: React.ChangeEvent<HTMLSelectElement>) => setPermicaoLevel(parseInt(e.target.value));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (senha !== confirmarSenha) {
            alert('As senhas não são iguais');
            return;
        }

        try {
            // Criação do funcionário
            const funcionarioResponse = await fetch('http://localhost:8080/funcionario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cargo,
                    permicaoLevel: permicaoLevel,
                }),
            });

            if (!funcionarioResponse.ok) {
                throw new Error('Failed to create funcionario');
            }

            const funcionarioData = await funcionarioResponse.json();
            const pessoaId = funcionarioData.idPessoa;
            

            
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
                throw new Error('Failed to update pessoa');
            }

            alert('Funcionário cadastrado com sucesso e dados de pessoa atualizados!');
            setNome('');
            setEmail('');
            setTelefone('');
            setSenha('');
            setConfirmarSenha('');
            setCargo('Administrador');
            setPermicaoLevel(1);
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar o funcionário: ' + error);
        }
    };

    return (
        <div className="container">
            <h1>Cadastrar Funcionários</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="nome" required value={nome} onChange={changeNome} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="Email" required value={email} onChange={changeEmail} />
                </label>
                <br />
                <label htmlFor="telefone">
                    Telefone:
                    <input type="text" id="telefone" name="Telefone" placeholder="(99) 99999-9999" value={telefone} onChange={changeTelefone} />
                </label>
                <br />
                <label>
                    Senha:
                    <input type={hiden ? 'password' : 'text'} value={senha} onChange={changeSenha} required />
                    <div className={`viwpassword ${hiden ? 'pshiden' : 'psshow'}`} onClick={isHiden}></div>
                </label>
                <br />
                <label>
                    Confirme a Senha:
                    <input type={hiden ? 'password' : 'text'} value={confirmarSenha} onChange={changeConfirmarSenha} required />
                    {confirmarSenha !== senha ? <p className="error">As senhas não são iguais</p> : null}
                </label>
                <br />
                <label>
                    Cargo:
                    <select defaultValue="Administrador" value={cargo} onChange={changeCargo}>
                        <option value="Administrador">Administrador</option>
                        <option value="Gerente">Gerente</option>
                        <option value="Cozinheiro">Cozinheiro</option>
                        <option value="Entregador">Entregador</option>
                    </select>
                </label>
                <label>
                    Nível de Acesso:
                    <select defaultValue={1} value={permicaoLevel} onChange={changePermicaoLevel}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadFunc;
