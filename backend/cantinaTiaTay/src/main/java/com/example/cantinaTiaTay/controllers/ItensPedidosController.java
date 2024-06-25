package com.example.cantinaTiaTay.controllers;

import com.example.cantinaTiaTay.dtos.ClientesRecordDto;
import com.example.cantinaTiaTay.dtos.ItensPedidosRecordDto;
import com.example.cantinaTiaTay.dtos.ProdutosRecordDto;
import com.example.cantinaTiaTay.model.*;
import com.example.cantinaTiaTay.repositories.ItensPedidosRepository;
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
@RequestMapping("/itensPedidos")
@CrossOrigin(origins = "http://localhost:5173")
public class ItensPedidosController {

    @Autowired
    ItensPedidosRepository itensPedidosRepository;

    @PostMapping("")
    public ResponseEntity<ItensPedidos> saveItensPedidos(@RequestBody @Valid ItensPedidosRecordDto itensPedidosRecordDto){
        var itensPedidos = new ItensPedidos();
        BeanUtils.copyProperties(itensPedidosRecordDto, itensPedidos);
        return ResponseEntity.status(HttpStatus.CREATED).body(itensPedidosRepository.save(itensPedidos));
    }

    @GetMapping("")
    public ResponseEntity<List<ItensPedidos>> getAllItensPedidos(){
        return ResponseEntity.status(HttpStatus.OK).body(itensPedidosRepository.findAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateItensPedidos(@PathVariable(value ="id") Integer id,
                                                 @RequestBody @Valid ItensPedidosRecordDto itensPedidosRecordDto) {
        Optional<ItensPedidos> itensPedidosO = itensPedidosRepository.findById(id);
        if(itensPedidosO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item Não Encontrado.");
        }
        var itensPedidos = itensPedidosO.get();
        BeanUtils.copyProperties(itensPedidosRecordDto, itensPedidos);
        return ResponseEntity.status(HttpStatus.OK).body(itensPedidosRepository.save(itensPedidos));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteItensPedidos(@PathVariable(value ="id") Integer id) {
        Optional<ItensPedidos> itensPedidosO = itensPedidosRepository.findById(id);
        if (itensPedidosO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item Não Encontrado.");
        }
        itensPedidosRepository.delete(itensPedidosO.get());
        return ResponseEntity.status(HttpStatus.OK).body("Item removido com sucesso");
    }

}
