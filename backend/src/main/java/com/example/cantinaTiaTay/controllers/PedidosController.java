package com.example.cantinatiatay.controllers;

import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.cantinatiatay.dtos.ClientesRecordDto;
import com.example.cantinatiatay.dtos.ItensPedidosRecordDto;
import com.example.cantinatiatay.dtos.PedidosRecordDto;
import com.example.cantinatiatay.dtos.PessoasRecordDto;
import com.example.cantinatiatay.model.*;
import com.example.cantinatiatay.repositories.PedidosRepository;

import java.util.List;
import java.util.Optional;

@Controller
public class PedidosController {

    @Autowired
    PedidosRepository pedidosRepository;

    @PostMapping("/pedidos")
    public ResponseEntity<Pedidos> savePedidos(@RequestBody @Valid PedidosRecordDto pedidosRecordDto){
        var pedidos = new Pedidos();
        BeanUtils.copyProperties(pedidosRecordDto, pedidos);
        return ResponseEntity.status(HttpStatus.CREATED).body(pedidosRepository.save(pedidos));
    }

    @GetMapping("/pedidos")
    public ResponseEntity<List<Pedidos>> getAllPedidos(){
        return ResponseEntity.status(HttpStatus.OK).body(pedidosRepository.findAll());
    }

    @PutMapping("/pedidos/{id}")
    public ResponseEntity<Object> updatePedidos(@PathVariable(value ="id") Integer idPedido,
                                                     @RequestBody @Valid PedidosRecordDto pedidosRecordDto) {
        Optional<Pedidos> pedidosO = pedidosRepository.findById(idPedido);
        if(pedidosO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pedido Não Encontrado.");
        }
        var pedidos = pedidosO.get();
        BeanUtils.copyProperties(pedidosRecordDto, pedidos);
        return ResponseEntity.status(HttpStatus.OK).body(pedidosRepository.save(pedidos));
    }

    @DeleteMapping("/pedido/{id}")
    public ResponseEntity<Object> deletePedidos(@PathVariable(value ="id") Integer idPedido) {
        Optional<Pedidos> pedidosO = pedidosRepository.findById(idPedido);
        if (pedidosO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto Não Encontrado.");
        }
        pedidosRepository.delete(pedidosO.get());
        return ResponseEntity.status(HttpStatus.OK).body("Pedido deletado com sucesso");
    }


}
