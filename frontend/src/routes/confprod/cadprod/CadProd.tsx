import './CadProd.css';
import React, { useState } from 'react';



export default function CadProd() {
    const [nome, setNome] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [img, setImg] = useState('');

    const changeNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value);
    };

    const changeIngredientes = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIngredientes(e.target.value);
    };

    const changeDescricao = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDescricao(e.target.value);
    };

    const changePreco = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPreco(e.target.value);
    };

    const changeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImg(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/produtos', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    ingredientes: ingredientes,
                    descricao: descricao,
                    preco: parseFloat(preco),
                    img: img
                })
            });

            if (response.ok) {
                alert('Produto cadastrado com sucesso!');
                // Limpar o formulário ou redirecionar o usuário
                setNome('');
                setIngredientes('');
                setDescricao('');
                setPreco('');
                setImg('');
            } else {
                const errorText = await response.text();
                alert('Erro ao cadastrar o produto: ' + errorText);
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar o produto: ' + error);
        }
    };


    return (
        <div className="container">
            <div className="cadprodu">
                <h1>Cadastro de Produtos</h1>
                <form onSubmit={handleSubmit} id='caprodform'>
                    <label htmlFor="nome">Nome do Produto:
                        <input type="text" name="nome" value={nome} onChange={changeNome} required />
                    </label>
                    <label htmlFor="ingredientes">Ingredientes:
                        <input type="text" name="ingredientes" value={ingredientes} onChange={changeIngredientes} required />
                    </label>
                    <label htmlFor="descricao">Descricao:
                        <input type="text" name="descricao" value={descricao} onChange={changeDescricao} required/>
                    </label>
                    <label htmlFor="preco">Preco:
                        <input type="number" name="preco" value={preco} onChange={changePreco} required />
                    </label>
                    <label htmlFor="img">URL da imagem:
                        <input type="url" name="img" value={img} onChange={changeImg} required />
                    </label>
                    <button type="submit">Criar</button>
                </form>
            </div>
        </div>
    );
}
