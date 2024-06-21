package com.example.cantinatiatay.model;

import jakarta.persistence.*;

@Entity
@Table(name="Clientes")
//@PrimaryKeyJoinColumn(name = "idPessoa")
public class Clientes extends Pessoas{
    @Column(name = "rua")
    private String rua;
    @Column(name = "bairro")
    private String bairro;
    @Column(name = "cidade")
    private String cidade;
    @Column(name = "cep")
    private String cep;
    @Column(name = "numero")
    private int numero;
    @Column(name = "complemento")
    private String complemento;


    public Clientes(Integer idPessoa, String nome, String email, String senha, String telefone, String rua, String bairro, String cidade, String cep, int numero, String complemento) {
        super(idPessoa, nome, email, senha, telefone);
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.cep = cep;
        this.numero = numero;
        this.complemento = complemento;
    }

    public Clientes(){
        super();
    }


    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }
}
