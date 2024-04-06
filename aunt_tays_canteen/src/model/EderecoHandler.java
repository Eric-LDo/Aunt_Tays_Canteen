package model;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.IOException;
import java.util.ArrayList;
final class EnderecoHandler implements HttpHandler {
    private String ListaJson = "[";
    public void concatEnderecos(ArrayList<Endereco> enderecos){
        for (Endereco en : enderecos) {
            this.ListaJson += en.toString();
        }
        this.ListaJson += "]";
    }
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String response = this.ListaJson ;
        exchange.sendResponseHeaders(200,response.length());
        exchange.getResponseBody().write(response.getBytes());
        exchange.close();
    }
}