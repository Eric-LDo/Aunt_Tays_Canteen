import React from 'react';

interface EnderecoProps {
    onChangeRua: (value: string) => void;
    onChangeBairro: (value: string) => void;
    onChangeCidade: (value: string) => void;
    onChangeCep: (value: string) => void;
    onChangeNumero: (value: string) => void;
    onChangeComplemento: (value: string) => void;
}

const Endereco: React.FC<EnderecoProps> = ({
    onChangeRua,
    onChangeBairro,
    onChangeCidade,
    onChangeCep,
    onChangeNumero,
    onChangeComplemento,
}) => {
    return (
        <>
            <label>
                Rua:
                <input type="text" name="rua" onChange={(e) => onChangeRua(e.target.value)} required />
            </label>
            <br />
            <label>
                Bairro:
                <input type="text" name="bairro" onChange={(e) => onChangeBairro(e.target.value)} required />
            </label>
            <br />
            <label>
                Cidade:
                <input type="text" name="cidade" onChange={(e) => onChangeCidade(e.target.value)} required />
            </label>
            <br />
            <label>
                CEP:
                <input type="text" name="cep" onChange={(e) => onChangeCep(e.target.value)} required />
            </label>
            <br />
            <label>
                Número:
                <input type="text" name="numero" onChange={(e) => onChangeNumero(e.target.value)} required />
            </label>
            <br />
            <label>
                Complemento:
                <input type="text" name="complemento" onChange={(e) => onChangeComplemento(e.target.value)} />
            </label>
            <br />
        </>
    );
};

export default Endereco;