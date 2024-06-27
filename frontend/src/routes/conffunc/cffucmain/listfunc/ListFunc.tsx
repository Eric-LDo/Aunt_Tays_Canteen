import React from 'react';

interface ListFuncProps {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    permicaoLevel: number;
    onDelete: (id: number) => void; // Função para deletar um funcionário
}

const ListFunc: React.FC<ListFuncProps> = ({ id, nome, email, telefone, cargo, permicaoLevel, onDelete }) => {

    const handleDeleteClick = () => {
        onDelete(id); // Chama a função onDelete passando o id do funcionário
    };

    return (
        <li key={id}>
            <h1>ID: {id} Nome: {nome}</h1>
            <p>Email: {email}</p>
            <p>Telefone: {telefone}</p>
            <p>Cargo: {cargo}</p>
            <p>Nível de Permissão: {permicaoLevel}</p>
            <button onClick={handleDeleteClick}>Deletar</button>
        </li>
    );
}

export default ListFunc;
