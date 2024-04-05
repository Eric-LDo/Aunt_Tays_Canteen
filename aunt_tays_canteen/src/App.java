
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import model.Endereco;

import java.io.IOException;
import java.net.InetSocketAddress;

final class HelloHandler  implements HttpHandler {
    public Endereco endereco = new Endereco("rua dos bobos");
    public void handle(HttpExchange t) throws IOException{
        String response = "jorge";
        t.sendResponseHeaders(200,response.length());
        t.getResponseBody().write(response.getBytes());
        t.close();
        
    }
}
public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        HttpServer server = HttpServer.create(new InetSocketAddress("localhost", 80), 0);
        server.createContext("/hello", new HelloHandler());
        server.setExecutor(null); //
        server.start();
    }
}
