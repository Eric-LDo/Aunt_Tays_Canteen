package model;

import java.time.LocalDateTime;



public class Pedidos {
    private int id;
    private LocalDateTime dataPedido;
    private Produto  produto;
    private int quantidade;
    private double valorTotal;
    
    public Pedidos(Produto produto, int quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.valorTotal = this.quantidade*produto.getValor();
        this.dataPedido = LocalDateTime.now();
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public Produto getProduto() {
        return produto;
    }
    public void setProduto(Produto produto) {
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
    
    @Override
    public String toString() {
        
        return String.format("\"id:\" d% \"Produto\": ", getId(), getProduto(), getQuantidade(), getValorTotal() );
    }
}
