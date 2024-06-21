package com.example.cantinatiatay.dtos;

import jakarta.validation.constraints.NotNull;

import java.util.ArrayList;

import com.example.cantinatiatay.model.Clientes;
import com.example.cantinatiatay.model.ItensPedidos;

public record PedidosRecordDto(@NotNull Clientes cliente, @NotNull String dataPedido, @NotNull Integer id) {
}
