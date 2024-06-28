/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonMenu from "../buttonMenu/buttonMenu";
import Closed from '../closed/closed';
import { useUser } from '../../contexts/UserContext';
import './telaLogin.css';

interface Props {
    onClosed: () => void;
}

const TelaLogin = ({ onClosed }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const clienteResponse = await fetch('http://localhost:8080/clientes');
            const clientes = await clienteResponse.json();

            const cliente = clientes.find((c: any) => c.email === email && c.senha === password);

            if (cliente) {
                setUser({ ...cliente, role: 'cliente' });
                navigate('/menu');
                return;
            }

            
            const funcionarioResponse = await fetch('http://localhost:8080/funcionario');
            const funcionarios = await funcionarioResponse.json();

            const funcionario = funcionarios.find((f: any) => f.email === email && f.senha === password);

            if (funcionario) {
                setUser({ ...funcionario, role: 'funcionario' });
                navigate('/funcionarios');
                return;
            }
            alert('Email ou senha incorretos');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login');
        }
    };

    return (
        <div className="telaLogin">
            <div className="form">
                <div className="closed" onClick={onClosed}><Closed /></div>
                <form method="post" action="#" onSubmit={handleLogin}>
                    <h1>Log in</h1>
                    <label htmlFor="email">
                        Email:<input type="email" id="in1" placeholder="Enter your email here" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <label htmlFor="password">
                        Password:<input type="password" name="password" id="in2" placeholder="Enter your password here" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <p>you don't have a <a href="/cadastro">registration</a></p>
                    <div>
                        <ButtonMenu buttonName={'Enter'}  />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TelaLogin;
