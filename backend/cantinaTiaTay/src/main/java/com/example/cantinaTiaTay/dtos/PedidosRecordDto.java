package com.example.cantinaTiaTay.dtos;

import com.example.cantinaTiaTay.model.Clientes;
import com.example.cantinaTiaTay.model.ItensPedidos;
import jakarta.validation.constraints.NotNull;

import java.util.ArrayList;

public record PedidosRecordDto(@NotNull Clientes cliente, @NotNull String dataPedido, @NotNull Integer id) {
}
