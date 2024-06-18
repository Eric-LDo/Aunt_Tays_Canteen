package com.example.cantinaTiaTay.controllers;

import com.example.cantinaTiaTay.dtos.ClientesRecordDto;
import com.example.cantinaTiaTay.dtos.FuncionarioRecordDto;
import com.example.cantinaTiaTay.dtos.ItensPedidosRecordDto;
import com.example.cantinaTiaTay.model.*;
import com.example.cantinaTiaTay.repositories.FuncionarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
public class FuncionarioController {

    @Autowired
    FuncionarioRepository funcionarioRepository;

    @PostMapping("/funcionario")
    public ResponseEntity<Funcionario> saveFuncionario(@RequestBody @Valid FuncionarioRecordDto funcionarioRecordDto){
        var funcionario = new Funcionario();
        BeanUtils.copyProperties(funcionarioRecordDto, funcionario);
        return ResponseEntity.status(HttpStatus.CREATED).body(funcionarioRepository.save(funcionario));
    }

    @GetMapping("/funcionario")
    public ResponseEntity<List<Funcionario>> getAllFuncionario(){
        return ResponseEntity.status(HttpStatus.OK).body(funcionarioRepository.findAll());
    }

    @PutMapping("/funcionario/{id}")
    public ResponseEntity<Object> updateFuncionario(@PathVariable(value ="id") int funcionarioId,
                                                     @RequestBody @Valid FuncionarioRecordDto funcionarioRecordDto) {
        Optional<Funcionario> funcionarioO = funcionarioRepository.findById(funcionarioId);
        if(funcionarioO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionario Não Encontrado.");
        }
        var funcionario  = funcionarioO.get();
        BeanUtils.copyProperties(funcionarioRecordDto, funcionario);
        return ResponseEntity.status(HttpStatus.OK).body(funcionarioRepository.save(funcionario));
    }

    @DeleteMapping("/funcionario/{id}")
    public ResponseEntity<Object> deleteFuncionario(@PathVariable(value ="id") int funcionarioId) {
        Optional<Funcionario> funcionarioO = funcionarioRepository.findById(funcionarioId);
        if(funcionarioO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionario Não Encontrado.");
        }
        funcionarioRepository.delete(funcionarioO.get());
        return ResponseEntity.status(HttpStatus.OK).body("Funcionário deletado com sucesso");
    }

}
