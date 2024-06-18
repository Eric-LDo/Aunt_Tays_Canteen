package com.example.cantinaTiaTay.repositories;

import com.example.cantinaTiaTay.model.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutosRepository extends JpaRepository<Produtos, Integer> {

}
