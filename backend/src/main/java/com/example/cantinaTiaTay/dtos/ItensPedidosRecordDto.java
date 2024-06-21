package com.example.cantinatiatay.dtos;

import com.example.cantinatiatay.model.Produtos;

import jakarta.validation.constraints.NotNull;

public record ItensPedidosRecordDto(@NotNull int quantidade, @NotNull Produtos produto) {

}
