package com.example.cantinaTiaTay.controllers;

import com.example.cantinaTiaTay.dtos.ClientesRecordDto;
import com.example.cantinaTiaTay.model.Clientes;
import com.example.cantinaTiaTay.repositories.ClientesRepository;
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
@RequestMapping("/clientes")
public class ClientesController {

    @Autowired
    ClientesRepository clientesRepository;

    @PostMapping
    public ResponseEntity<Clientes> saveClientes(@RequestBody @Valid ClientesRecordDto clientesRecordDto){
        var clientes = new Clientes();
        BeanUtils.copyProperties(clientesRecordDto, clientes);
        return ResponseEntity.status(HttpStatus.CREATED).body(clientesRepository.save(clientes));
    }

    @GetMapping
    public ResponseEntity<List<Clientes>> getAllClientes(){
        return ResponseEntity.status(HttpStatus.OK).body(clientesRepository.findAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateClientes(@PathVariable(value ="id") Integer idPessoa,
                                                 @RequestBody @Valid ClientesRecordDto clientesRecordDto) {
        Optional<Clientes> clientesO = clientesRepository.findById(idPessoa);
        if(clientesO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente Não Encontrado.");
        }
        var clientes  = clientesO.get();
        BeanUtils.copyProperties(clientesRecordDto, clientes);
        return ResponseEntity.status(HttpStatus.OK).body(clientesRepository.save(clientes));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteClientes(@PathVariable(value ="id") Integer idPessoa) {
        Optional<Clientes> clientesO = clientesRepository.findById(idPessoa);
        if(clientesO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente Não Encontrado.");
        }
        clientesRepository.delete(clientesO.get());
        return ResponseEntity.status(HttpStatus.OK).body("Cliente deletado com sucesso");
    }
}
