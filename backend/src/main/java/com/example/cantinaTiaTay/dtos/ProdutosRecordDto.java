package com.example.cantinatiatay.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ProdutosRecordDto(@NotNull String nome,@NotNull String ingredientes,@NotNull String descricao,@NotNull double preco,@NotBlank String img) {
}
