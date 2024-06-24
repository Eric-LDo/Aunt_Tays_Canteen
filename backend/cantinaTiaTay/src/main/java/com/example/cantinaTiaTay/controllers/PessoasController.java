package com.example.cantinaTiaTay.controllers;

import com.example.cantinaTiaTay.dtos.ClientesRecordDto;
import com.example.cantinaTiaTay.dtos.PessoasRecordDto;
import com.example.cantinaTiaTay.dtos.ProdutosRecordDto;
import com.example.cantinaTiaTay.model.Clientes;
import com.example.cantinaTiaTay.model.Funcionario;
import com.example.cantinaTiaTay.model.Pessoas;
import com.example.cantinaTiaTay.model.Produtos;
import com.example.cantinaTiaTay.repositories.PessoasRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Controller
@RequestMapping("/pessoas")
@CrossOrigin(origins = "http://localhost:5174")
public class PessoasController {

    @Autowired
    PessoasRepository pessoasRepository;

    @PostMapping
    public ResponseEntity<Pessoas> savePessoas(@RequestBody @Valid PessoasRecordDto pessoasRecordDto){
        var pessoas = new Pessoas();
        BeanUtils.copyProperties(pessoasRecordDto, pessoas);
        return ResponseEntity.status(HttpStatus.CREATED).body(pessoasRepository.save(pessoas));
    }

    @GetMapping
    public ResponseEntity<List<Pessoas>> getAllPessoas(){
        return ResponseEntity.status(HttpStatus.OK).body(pessoasRepository.findAll());
    }

    @PutMapping("/{id}")
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePessoas(@PathVariable(value ="id") int idPessoas) {
        Optional<Pessoas> pessoasO = pessoasRepository.findById(idPessoas);
        if (pessoasO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa Não Encontrado.");
        }
        pessoasRepository.delete(pessoasO.get());
        return ResponseEntity.status(HttpStatus.OK).body("Pessoa deletada com sucesso");
    }

}
