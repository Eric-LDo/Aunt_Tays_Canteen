package model;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.IOException;
import java.util.ArrayList;
final class EnderecoHandler implements HttpHandler {
    static ArrayList <Endereco> lista = new ArrayList<Endereco>();

    private String listaJson = "";
    
    public EnderecoHandler(){
    }
    
    public String concatEnderecos(ArrayList<Endereco> enderecos){
        listaJson = "[";
        for (Endereco en : enderecos) {
            this.listaJson += en.toString();
        }
        this.listaJson += "]";
        return this.listaJson;
    }

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String response = concatEnderecos(lista);
        exchange.sendResponseHeaders(200,response.length());
        exchange.getResponseBody().write(response.getBytes());
        exchange.close();
    }
    public static void addEnderco(Endereco e){
        lista.add(e);
    }
    public static ArrayList<Endereco> getLista() {
        return lista;
    }
    public static void setLista(ArrayList<Endereco> lista) {
        EnderecoHandler.lista = lista;
    }
    public String getListaJson() {
        return listaJson;
    }
    public void setListaJson(String listaJson) {
        this.listaJson = listaJson;
    }
}