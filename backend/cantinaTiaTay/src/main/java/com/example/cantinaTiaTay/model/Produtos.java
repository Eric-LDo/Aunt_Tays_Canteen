package com.example.cantinaTiaTay.model;

import jakarta.persistence.*;

import java.util.ArrayList;
@Entity
@Table(name="Produtos")
public class Produtos {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idProduto")
    private Integer id;

    @Column(name = "nome")
    private String nome;
    @Column(name = "ingredientes")
    private String ingredientes;
    @Column(name = "descricao")
    private String descricao;
    @Column(name = "preco")
    private double preco;
    @Column(name = "img")
    private String img;

    // Construtor
    public Produtos(Integer id, String nome, String ingredientes, String descricao, double preco, String img) {
        this.id = id;
        this.nome = nome;
        this.ingredientes = ingredientes;
        this.descricao = descricao;
        this.preco = preco;
        this.img = img;
    }

    public Produtos() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(String ingredientes) {
        this.ingredientes = ingredientes;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}