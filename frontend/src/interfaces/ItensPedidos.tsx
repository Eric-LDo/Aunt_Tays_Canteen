import Produtos from "./Produtos";
export default interface ItensPedidos{
    id: number,
    idPedido: number;
    produto: Produtos;
    quantidade: number;
    valorTotal: number;
}