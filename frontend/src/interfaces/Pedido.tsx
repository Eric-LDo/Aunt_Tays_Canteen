import Clientes from "./Clientes";
import ItensPedidos from "./ItensPedidos";

export default interface Pedido{
    idPedido:number;
    cliente: Clientes;
    dataPedido: string;
    itensPedidos:ItensPedidos[];
}