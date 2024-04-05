package model;

import java.util.ArrayList;

public class Cliente extends Pessoa{
    private Endereco endereco;
    private String telefone;
    private ArrayList<Pedidos> pedidos;
    public Cliente(String nome, String cpf, char sexo, Endereco endereco, String telefone, ArrayList<Pedidos> pedidos) {
        super(nome, cpf, sexo);
        this.endereco = endereco;
        this.telefone = telefone;
        this.pedidos = pedidos;
    }
    public Endereco getEndereco() {
        return endereco;
    }
    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
    public String getTelefone() {
        return telefone;
    }
    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
    public ArrayList<Pedidos> getPedidos() {
        return pedidos;
    }
    public void setPedidos(ArrayList<Pedidos> pedidos) {
        this.pedidos = pedidos;
    }
    
    
}
