package com.example.cantinaTiaTay.model;

import jakarta.persistence.*;
//import javax.persistence.*;

@Entity
@Table(name="Itens_Pedidos")
//@PrimaryKeyJoinColumn(name = "idItensPedidos")
public class ItensPedidos {

    @EmbeddedId
    private ItensPedidosId id;

    @ManyToOne
    @MapsId("pedidoId")
    @JoinColumn(name = "pedido_id")
    private Pedidos pedido;

    @ManyToOne
    @MapsId("clienteId")
    @JoinColumn(name = "cliente_id")
    private Clientes cliente;

    @ManyToOne
    @JoinColumn(name = "produto_id", nullable = false)
    private Produtos produto;

    private String nome;
    private int quantidade;

    // Getters e Setters

    public ItensPedidosId getId() {
        return id;
    }

    public void setId(ItensPedidosId id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public double getPreco() {
        return produto.getPreco();
    }

    public Pedidos getPedido() {
        return pedido;
    }

    public void setPedido(Pedidos pedido) {
        this.pedido = pedido;
    }

    public Clientes getCliente() {
        return cliente;
    }

    public void setCliente(Clientes cliente) {
        this.cliente = cliente;
    }

    public Produtos getProduto() {
        return produto;
    }

    public void setProduto(Produtos produto) {
        this.produto = produto;
    }
}

