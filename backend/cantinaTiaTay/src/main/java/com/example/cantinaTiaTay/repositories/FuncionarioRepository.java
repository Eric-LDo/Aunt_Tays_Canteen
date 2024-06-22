package com.example.cantinaTiaTay.repositories;

import com.example.cantinaTiaTay.model.Funcionario;
import com.example.cantinaTiaTay.model.Pessoas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {

}
