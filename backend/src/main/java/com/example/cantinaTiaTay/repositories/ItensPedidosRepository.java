package com.example.cantinatiatay.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cantinatiatay.model.ItensPedidos;
import com.example.cantinatiatay.model.Pessoas;

@Repository
public interface ItensPedidosRepository extends JpaRepository<ItensPedidos, Integer> {

}
