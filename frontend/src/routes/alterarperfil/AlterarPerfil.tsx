import './AlterarPerfil.css';
import { useState, useEffect } from 'react';
import { useUser } from '../../contexts/UserContext';
import Clientes from '../../interfaces/Clientes';
import Header from '../../components/header/header';

export default function AlterarPerfil() {
  const { user } = useUser();
  const userId = user?.idPessoa ?? 0;
  const [clientes, setClientes] = useState<Clientes[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [,setCliente] = useState<Clientes | null>(null);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState<number | string>('');
  const [complemento, setComplemento] = useState('');

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch('http://localhost:8080/clientes', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error('Erro ao buscar dados dos clientes:', error);
        alert('Erro ao buscar dados dos clientes. Tente novamente mais tarde.');
      }
    };

    fetchClientes();
  }, []);

  useEffect(() => {
    if (user && user.role === 'cliente' && userId !== 0) {
      const clienteEncontrado = clientes.find(c => c.idPessoa === userId);
      if (clienteEncontrado) {
        setCliente(clienteEncontrado);
        setNome(clienteEncontrado.nome);
        setEmail(clienteEncontrado.email);
        setTelefone(clienteEncontrado.telefone);
        setSenha(clienteEncontrado.senha); // Adicionado campo senha
        setRua(clienteEncontrado.rua);
        setBairro(clienteEncontrado.bairro);
        setCidade(clienteEncontrado.cidade);
        setCep(clienteEncontrado.cep);
        setNumero(clienteEncontrado.numero);
        setComplemento(clienteEncontrado.complemento);
      }
    }
  }, [user, clientes, userId]);

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

      const clienteResponse = await fetch(`http://localhost:8080/clientes/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          rua,
          bairro,
          cidade,
          cep,
          numero,
          complemento,
          senha,
        }),
      });

      if (!clienteResponse.ok) {
        throw new Error('Erro ao atualizar dados do cliente');
      }

      alert('Dados atualizados com sucesso!');
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao atualizar os dados: ' + error);
    }
    
  };

  return (
    <div className="editar">
      <Header logoURL={''} />
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
          <button type="submit">Salvar Alterações</button>
        </form>
      </div>
    </div>
  );
}
