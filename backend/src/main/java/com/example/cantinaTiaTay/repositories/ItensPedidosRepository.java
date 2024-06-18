package com.example.cantinaTiaTay.repositories;

import com.example.cantinaTiaTay.model.ItensPedidos;
import com.example.cantinaTiaTay.model.Pessoas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItensPedidosRepository extends JpaRepository<ItensPedidos, Integer> {

}
