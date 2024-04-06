package model;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.ArrayList;
public class Endereco{
    private String rua, bairro, cidade, estado, complemento;
    private int id, cep, numero;
    public Endereco(String rua, String bairro, String cidade, String estado, String complemento, int cep, int numero) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.complemento = complemento;
        this.cep = cep;
        this.numero = numero;
    }
    public Endereco(String rua) {
        this.rua = rua;
    }
    public static void conectionFront(ArrayList<Endereco> lista) throws IOException{
        HttpServer server = HttpServer.create(new InetSocketAddress("localhost", 8001), 0);
        server.createContext("/endereco", new EnderecoHandler());
        server.setExecutor(null); //
        server.start();
        EnderecoHandler send = new  EnderecoHandler();
        send.concatEnderecos(lista);
    }
    

    public String getRua(){
        return this.rua;
    }
    public void setRua(String rua){
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
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }
    public String getComplemento() {
        return complemento;
    }
    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getCep() {
        return cep;
    }
    public void setCep(int cep) {
        this.cep = cep;
    }
    public int getNumero() {
        return numero;
    }
    public void setNumero(int numero) {
        this.numero = numero;
    }
    @Override
    public String toString(){
        return String.format("\"Endereco\":rua"  );
    }
  
    
}

