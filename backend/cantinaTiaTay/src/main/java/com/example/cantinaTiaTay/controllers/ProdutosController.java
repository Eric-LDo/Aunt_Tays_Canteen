package com.example.cantinaTiaTay.controllers;

import com.example.cantinaTiaTay.dtos.ClientesRecordDto;
import com.example.cantinaTiaTay.dtos.ProdutosRecordDto;
import com.example.cantinaTiaTay.model.Clientes;
import com.example.cantinaTiaTay.model.Funcionario;
import com.example.cantinaTiaTay.model.Produtos;
import com.example.cantinaTiaTay.repositories.ProdutosRepository;
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
@RequestMapping("/produtos")
@CrossOrigin(origins = "http://localhost:5173")
public class ProdutosController {

    @Autowired
    ProdutosRepository produtosRepository;

    @PostMapping
    public ResponseEntity<Produtos> saveProdutos(@RequestBody @Valid ProdutosRecordDto produtosRecordDto){
        var produtos = new Produtos();
        BeanUtils.copyProperties(produtosRecordDto, produtos);
        return ResponseEntity.status(HttpStatus.CREATED).body(produtosRepository.save(produtos));
    }

    @GetMapping
    public ResponseEntity<List<Produtos>> getAllProdutos(){
        return ResponseEntity.status(HttpStatus.OK).body(produtosRepository.findAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateProdutos(@PathVariable(value ="id") int id,
                                                 @RequestBody @Valid ProdutosRecordDto produtosRecordDto) {
        Optional<Produtos> produtoO = produtosRepository.findById(id);
        if(produtoO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto Não Encontrado.");
        }
        var produtos = produtoO.get();
        BeanUtils.copyProperties(produtosRecordDto, produtos);
        return ResponseEntity.status(HttpStatus.OK).body(produtosRepository.save(produtos));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteProdutos(@PathVariable(value ="id") int id) {
        Optional<Produtos> produtoO = produtosRepository.findById(id);
        if (produtoO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto Não Encontrado.");
        }
        produtosRepository.delete(produtoO.get());
        return ResponseEntity.status(HttpStatus.OK).body("Produto deletado com sucesso");
    }

}
