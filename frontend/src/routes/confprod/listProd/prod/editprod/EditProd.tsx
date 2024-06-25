
import React, {useState} from 'react';
import './EditProd.css'
import Props from '../../../../../interfaces/Produtos.tsx'

export default function EditProd({id, nome, ingredientes, descricao, preco, img}:Props){
        const [newNome, setNewNome] = useState(nome);
        const [newIngredientes, setNewIngredients] = useState(ingredientes);
        const [newDescricao, setNewDescricao] = useState(descricao);
        const [newPreco, setNewPreco] = useState(preco);
        const [newImg, setNewImg] = useState(img);


        const changeNome = (e: React.ChangeEvent<HTMLInputElement>) => {
            setNewNome(e.target.value);
        };

        const changeIngredientes = (e: React.ChangeEvent<HTMLInputElement>) => {
            setNewIngredients(e.target.value);
        };

        const changeDescricao = (e: React.ChangeEvent<HTMLInputElement>) => {
            setNewDescricao(e.target.value);
        };

        const changePreco = (e: React.ChangeEvent<HTMLInputElement>) => {
            setNewPreco(parseFloat(e.target.value));
        };

        const changeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
            setNewImg(e.target.value);
        };
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            try {
                const response = await fetch(`http://localhost:8080/produtos/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nome: newNome,
                        ingredientes: newIngredientes,
                        descricao: newDescricao,
                        preco: newPreco,
                        img: newImg
                    })
                });

                if (response.ok) {
                    alert('Produto editado com sucesso!');
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
            <div className="box">
                <h1>Cadastro de Produtos</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome do Produto:
                        <input type="text" name="nome" placeholder={nome} onChange={changeNome} required/>
                    </label>
                    <label htmlFor="ingredientes">Ingredientes:
                        <input type="text" name="ingredientes" placeholder={ingredientes} onChange={changeIngredientes}
                               required/>
                    </label>
                    <label htmlFor="descricao">Descricao:
                        <input type="text" name="descricao" placeholder={descricao} onChange={changeDescricao} required/>
                    </label>
                    <label htmlFor="preco">Preco:
                        <input type="number" name="preco"  onChange={changePreco} required/>
                    </label>
                    <label htmlFor="img">URL da imagem:
                        <input type="url" name="img" placeholder={img} onChange={changeImg} required/>
                    </label>
                    <button type="submit">Criar</button>
                </form>
            </div>
        )
    }