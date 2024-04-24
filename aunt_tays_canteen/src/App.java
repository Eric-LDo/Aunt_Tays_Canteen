import java.util.ArrayList;
import model.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        Endereco endere =  new Endereco("Rua dos bobos numero 0");
        endere.conectionFront(endere);
        
    }
}
