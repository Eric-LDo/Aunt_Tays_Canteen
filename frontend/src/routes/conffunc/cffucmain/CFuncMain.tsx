import { useState, useEffect } from 'react';
import './CFuncMain.css';
import CadFunc from './cadfunc/CadFunc';
import ListFunc from './listfunc/ListFunc';

interface Funcionario {
    idPessoa: number;
    nome: string;
    email: string;
    telefone: string;
    senha: string;
    cargo: string;
    permicaoLevel: number;
}

export default function CFuncMain() {
    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

    useEffect(() => {
        const fetchFuncionarios = async () => {
            try {
                const response = await fetch("http://localhost:8080/funcionario");
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data: Funcionario[] = await response.json();
                setFuncionarios(data);
            } catch (error) {
                console.error('Erro ao buscar funcionários:', error);
            }
        };

        fetchFuncionarios();
    }, []);

    const handleDeleteFuncionario = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8080/funcionario/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Erro ao deletar funcionário');
            }

            
            setFuncionarios(funcionarios.filter(funcionario => funcionario.idPessoa !== id));
            alert('Funcionário deletado com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar funcionário:', error);
            alert('Erro ao deletar funcionário: ' + error);
        }
    };

    return (
        <div className="container">
            <h1>Configurações de Funcionários</h1>
            <CadFunc />
            <h1>Funcionários</h1>
            <ul>
                {funcionarios.map((funcionario) => (
                    <ListFunc
                        key={funcionario.idPessoa}
                        id={funcionario.idPessoa}
                        nome={funcionario.nome}
                        email={funcionario.email}
                        telefone={funcionario.telefone}
                        cargo={funcionario.cargo}
                        permicaoLevel={funcionario.permicaoLevel}
                        onDelete={handleDeleteFuncionario}
                    />
                ))}
            </ul>
        </div>
    );
}
