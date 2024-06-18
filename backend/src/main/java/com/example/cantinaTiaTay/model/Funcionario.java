package com.example.cantinaTiaTay.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name="Funcionarios")
//@PrimaryKeyJoinColumn(name = "idPessoa")
public class Funcionario extends Pessoas {
    @Column(name = "cargo")
    private String cargo;
    @Column(name = "permicaoLevel")
    private int permissaoLevel;

    public Funcionario(Integer idPessoa, String nome, String email, String senha, String telefone, String cargo, int permissaoLevel) {
        super(idPessoa, nome, email, senha, telefone);
        this.cargo = cargo;
        this.permissaoLevel = permissaoLevel;
    }

    public Funcionario(){
        super();

    }


    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public int getPermissaoLevel() {
        return permissaoLevel;
    }

    public void setPermissaoLevel(int permissaoLevel) {
        this.permissaoLevel = permissaoLevel;
    }
}
