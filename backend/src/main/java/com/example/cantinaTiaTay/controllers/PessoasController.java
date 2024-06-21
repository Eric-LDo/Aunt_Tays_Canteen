package com.example.cantinatiatay.controllers;

import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.cantinatiatay.dtos.ClientesRecordDto;
import com.example.cantinatiatay.dtos.PessoasRecordDto;
import com.example.cantinatiatay.dtos.ProdutosRecordDto;
import com.example.cantinatiatay.model.Clientes;
import com.example.cantinatiatay.model.Funcionario;
import com.example.cantinatiatay.model.Pessoas;
import com.example.cantinatiatay.model.Produtos;
import com.example.cantinatiatay.repositories.PessoasRepository;

import java.util.List;
import java.util.Optional;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Controller
public class PessoasController {

    @Autowired
    PessoasRepository pessoasRepository;

    @PostMapping("/pessoas")
    public ResponseEntity<Pessoas> savePessoas(@RequestBody @Valid PessoasRecordDto pessoasRecordDto){
        var pessoas = new Pessoas();
        BeanUtils.copyProperties(pessoasRecordDto, pessoas);
        return ResponseEntity.status(HttpStatus.CREATED).body(pessoasRepository.save(pessoas));
    }

    @GetMapping("/pessoas")
    public ResponseEntity<List<Pessoas>> getAllPessoas(){
        return ResponseEntity.status(HttpStatus.OK).body(pessoasRepository.findAll());
    }

    @PutMapping("/pessoas/{id}")
    public ResponseEntity<Object> updatePessoas(@PathVariable(value ="id") int idPessoas,
                                                 @RequestBody @Valid PessoasRecordDto pessoasRecordDto) {
        Optional<Pessoas> pessoa0 = pessoasRepository.findById(idPessoas);
        if(pessoa0.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa Não Encontrado.");
        }
        var pessoas = pessoa0.get();
        BeanUtils.copyProperties(pessoasRecordDto, pessoas);
        return ResponseEntity.status(HttpStatus.OK).body(pessoasRepository.save(pessoas));
    }

    @DeleteMapping("/pessoas/{id}")
    public ResponseEntity<Object> deletePessoas(@PathVariable(value ="id") int idPessoas) {
        Optional<Pessoas> pessoasO = pessoasRepository.findById(idPessoas);
        if (pessoasO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa Não Encontrado.");
        }
        pessoasRepository.delete(pessoasO.get());
        return ResponseEntity.status(HttpStatus.OK).body("Pessoa deletada com sucesso");
    }

}
