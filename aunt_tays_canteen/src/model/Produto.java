package model;

import javax.xml.crypto.Data;

public class Produto {
    private int id;
    private String descricao;
    private double valor;
    private double custo;
    private String igredientes;
    private Data validade;
    public Produto(String descricao, double valor, double custo, String igredientes, Data validade) {
        this.descricao = descricao;
        this.valor = valor;
        this.custo = custo;
        this.igredientes = igredientes;
        this.validade = validade;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public double getValor() {
        return valor;
    }
    public void setValor(double valor) {
        this.valor = valor;
    }
    public double getCusto() {
        return custo;
    }
    public void setCusto(double custo) {
        this.custo = custo;
    }
    public String getIgredientes() {
        return igredientes;
    }
    public void setIgredientes(String igredientes) {
        this.igredientes = igredientes;
    }
    public Data getValidade() {
        return validade;
    }
    public void setValidade(Data validade) {
        this.validade = validade;
    }
    
}
