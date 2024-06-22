package com.example.cantinaTiaTay.dtos;

import com.example.cantinaTiaTay.model.Produtos;
import jakarta.validation.constraints.NotNull;

public record ItensPedidosRecordDto(@NotNull int quantidade, @NotNull Produtos produto) {

}
