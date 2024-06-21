package com.example.cantinatiatay.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record PessoasRecordDto(@NotNull String nome, @NotBlank String email, @NotBlank String senha, @NotNull String telefone) {
}
