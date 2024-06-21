package com.example.cantinatiatay.dtos;

import jakarta.validation.constraints.NotNull;

public record ClientesRecordDto(@NotNull String rua, @NotNull String bairro, @NotNull String cidade, @NotNull String cep, @NotNull int numero, @NotNull String complemento) {
}
