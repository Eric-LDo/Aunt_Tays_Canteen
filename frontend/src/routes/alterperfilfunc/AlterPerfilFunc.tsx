import './AlterPerfilFunc.css';
import { useState, useEffect } from 'react';
import { useUser } from '../../contexts/UserContext';
import Funcionarios from '../../interfaces/Funcionarios';
import HeaderFunc from '../../components/headerfunc/HeaderFunc';

export default function AlterarPerfilFuncionario() {
  const { user } = useUser();
  console.log(user)
  const userId = user?.idPessoa ?? 0;
  const [funcionarios, setFuncionarios] = useState<Funcionarios[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setFuncionario] = useState<Funcionarios | null>(null);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [cargo, setCargo] = useState('');
  const [permissaoLevel, setPermissaoLevel] = useState<number | string>('');

  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        const response = await fetch('http://localhost:8080/funcionario', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setFuncionarios(data);
      } catch (error) {
        console.error('Erro ao buscar dados dos funcionários:', error);
        alert('Erro ao buscar dados dos funcionários. Tente novamente mais tarde.');
      }
    };

    fetchFuncionarios();
  }, []);

  useEffect(() => {
    if (user && user.role === 'funcionario' && userId !== 0) {
      const funcionarioEncontrado = funcionarios.find(f => f.idPessoa === userId);
      if (funcionarioEncontrado) {
        setFuncionario(funcionarioEncontrado);
        setNome(funcionarioEncontrado.nome);
        setEmail(funcionarioEncontrado.email);
        setTelefone(funcionarioEncontrado.telefone);
        setSenha(funcionarioEncontrado.senha);
        setCargo(funcionarioEncontrado.cargo);
        setPermissaoLevel(funcionarioEncontrado.permissaoLevel);
      }
    }
  }, [user, funcionarios, userId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userId === 0) {
      alert('ID do usuário não é válido.');
      return;
    }

    try {
      const pessoaResponse = await fetch(`http://localhost:8080/pessoas/${userId}`, {
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

      const funcionarioResponse = await fetch(`http://localhost:8080/funcionario/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          cargo,
          permissaoLevel,
          senha,
        }),
      });

      if (!funcionarioResponse.ok) {
        throw new Error('Erro ao atualizar dados do funcionário');
      }

      alert('Dados atualizados com sucesso!');
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao atualizar os dados: ' + error);
    }
  };
  console.log(funcionarios)
  return (
    <div className="editar">
      <HeaderFunc logoURL={''} />
      <div className="container">
        <h1>Editar Perfil</h1>
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
            Cargo:
            <input type="text" value={cargo} disabled />
          </label>
          <br />
          <label>
            Nível de Permissão:
            <input type="number" value={permissaoLevel} disabled />
          </label>
          <br />
          <label>
            Senha:
            <input type="password" value={senha} disabled />
          </label>
          <br />
          <button type="submit">Salvar Alterações</button>
        </form>
      </div>
    </div>
  );
}
