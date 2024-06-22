package com.example.cantinaTiaTay.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name="Funcionarios")
//@PrimaryKeyJoinColumn(name = "idPessoa")
public class Funcionario extends Pessoas {
   // @Column(name = "idFunc")
    //private Integer idFunc;
    @Column(name = "cargo")
    private String cargo;
    @Column(name = "permicaoLevel")
    private int permicaoLevel;

    public Funcionario(Integer idPessoa, String nome, String email, String senha, String telefone, String cargo, int permissaoLevel) {
        super(idPessoa, nome, email, senha, telefone);
//        this.idFunc = idPessoa;
        this.cargo = cargo;
        this.permicaoLevel = permissaoLevel;
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

    public int getPermicaoLevel() {
        return permicaoLevel;
    }

    public void setPermicaoLevel(int permicaoLevel) {
        this.permicaoLevel = permicaoLevel;
    }
}
