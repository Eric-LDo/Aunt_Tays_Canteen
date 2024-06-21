package com.example.cantinatiatay.controllers;

import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.cantinatiatay.dtos.ClientesRecordDto;
import com.example.cantinatiatay.dtos.FuncionarioRecordDto;
import com.example.cantinatiatay.model.Clientes;
import com.example.cantinatiatay.model.Funcionario;
import com.example.cantinatiatay.repositories.ClientesRepository;

import java.util.List;
import java.util.Optional;

@Controller
public class ClientesController {

    @Autowired
    ClientesRepository clientesRepository;

    @PostMapping("/clientes")
    public ResponseEntity<Clientes> saveClientes(@RequestBody @Valid ClientesRecordDto clientesRecordDto){
        var clientes = new Clientes();
        BeanUtils.copyProperties(clientesRecordDto, clientes);
        return ResponseEntity.status(HttpStatus.CREATED).body(clientesRepository.save(clientes));
    }

    @GetMapping("/clientes")
    public ResponseEntity<List<Clientes>> getAllClientes(){
        return ResponseEntity.status(HttpStatus.OK).body(clientesRepository.findAll());
    }

    @PutMapping("/clientes/{id}")
    public ResponseEntity<Object> updateClientes(@PathVariable(value ="id") int clientesId,
                                                    @RequestBody @Valid ClientesRecordDto clientesRecordDto) {
        Optional<Clientes> clientesO = clientesRepository.findById(clientesId);
        if(clientesO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente Não Encontrado.");
        }
        var clientes  = clientesO.get();
        BeanUtils.copyProperties(clientesRecordDto, clientes);
        return ResponseEntity.status(HttpStatus.OK).body(clientesRepository.save(clientes));
    }

    @DeleteMapping("/funcionario/{id}")
    public ResponseEntity<Object> deleteClientes(@PathVariable(value ="id") int clientesId) {
        Optional<Clientes> clientesO = clientesRepository.findById(clientesId);
        if(clientesO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente Não Encontrado.");
        }
        clientesRepository.delete(clientesO.get());
        return ResponseEntity.status(HttpStatus.OK).body("Clientes deletado com sucesso");
    }

}
