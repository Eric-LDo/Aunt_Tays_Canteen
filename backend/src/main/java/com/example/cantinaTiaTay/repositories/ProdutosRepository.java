package com.example.cantinatiatay.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cantinatiatay.model.Produtos;

@Repository
public interface ProdutosRepository extends JpaRepository<Produtos, Integer> {

}
