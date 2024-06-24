package com.example.cantinaTiaTay.dtos;

import jakarta.validation.constraints.NotNull;

public record ClientesRecordDto(@NotNull String rua, @NotNull String bairro, @NotNull String cidade, @NotNull String cep, @NotNull int numero, String complemento) {
}
