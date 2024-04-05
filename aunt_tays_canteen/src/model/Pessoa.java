package model;

public class Pessoa {
    private int id;
    private String nome;
    private String cpf;
    private char sexo;
    public Pessoa(String nome, String cpf, char sexo) {
        this.nome = nome;
        this.cpf = cpf;
        this.sexo = sexo;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public char getSexo() {
        return sexo;
    }
    public void setSexo(char sexo) {
        this.sexo = sexo;
    }
}
