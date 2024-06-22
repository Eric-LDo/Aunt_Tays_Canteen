package com.example.cantinaTiaTay.dtos;

import jakarta.validation.constraints.NotNull;

public record FuncionarioRecordDto(@NotNull String cargo, @NotNull int permicaoLevel) {
}
