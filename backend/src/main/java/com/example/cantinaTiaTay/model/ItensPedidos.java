package com.example.cantinaTiaTay.model;

import jakarta.persistence.*;

@Entity
@Table(name="Itens_Pedidos")
//@PrimaryKeyJoinColumn(name = "idItensPedidos")
public class ItensPedidos {

    //@EmbeddedId
    @Id
    private Integer id;



    @MapsId("idPedido")
    @ManyToOne
    @JoinColumn(name="idPedido")
    private Pedidos pedido;

    @MapsId("idProduto")
    @ManyToOne
    @JoinColumn(name="idProduto")
    private Produtos produto;


    @Column(name = "quantidade")
    private int quantidade;
    @Column(name = "valorTotal")
    private double valorTotal = quantidade * produto.getPreco();

    public ItensPedidos(Integer id, Pedidos pedido, Produtos produto, int quantidade, double valorTotal) {
        this.id = id;
        this.pedido = pedido;
        this.produto = produto;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }

    public ItensPedidos() {

    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Pedidos getPedido() {
        return pedido;
    }

    public void setPedido(Pedidos pedido) {
        this.pedido = pedido;
    }

    public Produtos getProduto() {
        return produto;
    }

    public void setProduto(Produtos produto) {
        this.produto = produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }
}

