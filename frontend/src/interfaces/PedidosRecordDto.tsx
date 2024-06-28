import Clientes from './Clientes';
import ItensPedidosRecordDto from './ItensPedidosRecordDto'

interface PedidosRecordDto {
  cliente: Clientes;
  dataPedido: string;
  itensPedidos: ItensPedidosRecordDto[];
}

export default PedidosRecordDto;
